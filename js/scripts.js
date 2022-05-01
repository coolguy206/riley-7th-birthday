$(document).ready(function() {
  console.log(`v0`);
  var count = 2;
  $('#add-child').on('click', function(e) {
    e.preventDefault();

    count = count + 1;

    var elem = `<div class="swim-container">
      <div class="first">
        <label>child ${count}</label>
        <input type="text" name="child${count}" placeholder="NAME">
      </div>
      <div class="second">
        <label>will you be swimming</label>
        <div>
          <label>
            <input type="radio" name="child${count}-swim" value="yes"> yes
            <span class="radiobtn"></span>
          </label>
          <label>
            <input type="radio" name="child${count}-swim" value="no"> no
            <span class="radiobtn"></span>
          </label>
        </div>
      </div>
    </div>`;

    if (count == 4) {
      $('.swimmers').append(elem);
      $('#add-child').hide();
    } else {
      $('.swimmers').append(elem);
    }
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log('submit button clicked');
    $(this).hide();
    $('.sending').show();
    var $inputs = $('form :input');
    console.log($inputs);
    var arr = [
      ['date', 'adult1', 'adult1-swim', 'adult2', 'adult2-swim', 'child1', 'child1-swim', 'child2', 'child2-swim', 'child3', 'child3-swim', 'child4', 'child4-swim']
    ];

    var date = new Date().toDateString();
    /*
        $inputs.map(function(i, val) {
          var value = val.value;
          var type = val.type;
          var name = val.name;
          var checked = val.checked
          var arrVal = [
            value: value,
            type: type,
            name: name,
          ];
          // console.log(obj);
          if (type == 'radio') {
            var inputVal = $(val).closest('.second').prev().find('input').val();
            if (inputVal !== '') {
              if (checked == true) {
                arr.push(arrVal);
              }
            }

          } else if (type == 'text') {
            if (value !== '') {
              arr.push(arrVal);
            }
          }

        });
    */
    // .serialize()
    console.log(arr);
    console.log(date);

    var range = `Sheet1!A1:M1`;
    var rangeURL = encodeURIComponent(range);

    var obj = {
      "majorDimension": "ROWS",
      "range": range,
      "values": arr,
    };

    obj = JSON.stringify(obj);
    console.log(typeof obj);
    console.log(obj);

    // {
    //   "range": "Sheet1!A1:D5",
    //   "majorDimension": "ROWS",
    //   "values": [
    //     ["Item", "Cost", "Stocked", "Ship Date"],
    //     ["Wheel", "$20.50", "4", "3/1/2016"],
    //     ["Door", "$15", "2", "3/15/2016"],
    //     ["Engine", "$100", "1", "3/20/2016"],
    //     ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
    //   ],
    // }

    // var x =`https://sheets.googleapis.com/v4/spreadsheets/1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo/values/Sheet1!A1%3AM1?responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED&key=[YOUR_API_KEY] HTTP/1.1`;


    console.log(`refresh test`);

    var key = `AIzaSyDFdm54gGbCpuu8rJKAa__QvI1slX8fy0Y`;
    var clientId = `684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com`;
    var accessToken = `ya29.A0ARrdaM8q-800JMiKcqsZ0GXU3pq4iynLcTK6mJh2MC8B-Eyrn_7bx7MTodDrY1gmJVeZICab-RPBDoq_B6nlP8MpFGkEk73Ltkqg6BisaDqi5MTkH94jrTDeeDoNo_qp6wgLybMXXGlNRCZeuIvOCkvasth79A`;
    var refreshAccessToken = `1//04BwYuIW4jzkdCgYIARAAGAQSNwF-L9IrADxMgJGStfKhYBIwi_PygwY4m13GeCi7vjg0br0vgZv8KR9elhoecjDkbiVsBK92wq4`;
    var clientSecret = `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`;
    var sheetId = `1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo`;
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rangeURL}?access_token=${accessToken}&valueInputOption=USER_ENTERED`;
    console.log(url);

    // $.post(url, obj, function(data) {
    //   console.log('goole sheets POST');
    //   console.log(data);
    // });

    var refreshURL = `https://oauth2.googleapis.com/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshAccessToken}&grant_type=refresh_token`;

    $.post(refreshURL, function(data) {
      console.log('goole api refresh access token');
      console.log(data);
    });

    // $.ajax({
    //   url: url,
    //   method: 'PUT',
    //   data: obj,
    //   headers: {
    //     "Authorization": `OAuth ${accessToken}`,
    //   },
    //   dataType: 'json',
    //   success: function(result) {
    //     // Do something with the result
    //     console.log(result);
    //   }
    // });


  });

});