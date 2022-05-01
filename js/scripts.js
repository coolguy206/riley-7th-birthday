$(document).ready(function() {
  console.log(`v2`);
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
    // console.log(arr);
    // console.log(date);

    var range = `Sheet1!A1:M1`;
    var rangeURL = encodeURIComponent(range);

    var obj = {
      "majorDimension": "ROWS",
      "range": range,
      "values": arr,
    };

    obj = JSON.stringify(obj);
    // console.log(typeof obj);
    // console.log(obj);

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


    //URL TO GET CODE
    // https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/spreadsheets&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//coolguy206.github.io&client_id=684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com

    //CODE TO GET ACCESS TOKEN
    // 4/0AX4XfWg2BJzLh40Ob_0jjprbn9QK_YOPoOcohqQ1wCEy8ZUqr9SvAeTyA9yw_cWqa6tyTw

    //URL TO GET ACCESS TOKEN FROM CODE
    // https://oauth2.googleapis.com/token?code=4/0AX4XfWg2BJzLh40Ob_0jjprbn9QK_YOPoOcohqQ1wCEy8ZUqr9SvAeTyA9yw_cWqa6tyTw&client_id=684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com&client_secret=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&redirect_uri=https%3A//coolguy206.github.io&grant_type=authorization_code

    //ACCESS TOKEN
    // ya29.A0ARrdaM9lCTGIQRAaTKpzn8RFckupNPpD9MxSHS3VSlKul7HrSmNC2kf7kQ7NzsMthrwA9bCipBEOKKRLlwXCkjZYGT82UUrD6xmn5hcuN-W-8AYiSFrx2p-s9IFiao9IMMM6q_Kt_vqyZ91e9vBfB_sLFlrT

    //REFRESH TOKEN
    // 1//06qm1K7l2zt1MCgYIARAAGAYSNwF-L9IrUbz90foUtHEnaHbVzUe2Mvt1GttOz8-7enFuL4Eim-cyCpR0xBfIgBe8-_9sTkJ5KZY

    //REFRESH TOKEN POST URL
    // https: //oauth2.googleapis.com/token?client_id=684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com&client_secret=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&refresh_token=1//06qm1K7l2zt1MCgYIARAAGAYSNwF-L9IrUbz90foUtHEnaHbVzUe2Mvt1GttOz8-7enFuL4Eim-cyCpR0xBfIgBe8-_9sTkJ5KZY&grant_type=refresh_token

    //PUT URL
    // https://sheets.googleapis.com/v4/spreadsheets/1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo/values/Sheet1!A1%3AM1?key=AIzaSyDFdm54gGbCpuu8rJKAa__QvI1slX8fy0Y&access_token=  ya29.A0ARrdaM9lCTGIQRAaTKpzn8RFckupNPpD9MxSHS3VSlKul7HrSmNC2kf7kQ7NzsMthrwA9bCipBEOKKRLlwXCkjZYGT82UUrD6xmn5hcuN-W-8AYiSFrx2p-s9IFiao9IMMM6q_Kt_vqyZ91e9vBfB_sLFlrT&valueInputOption=USER_ENTERED

    console.log(`refresh test`);

    var key = `AIzaSyDFdm54gGbCpuu8rJKAa__QvI1slX8fy0Y`;
    var clientId = `684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com`;
    var accessToken = `ya29.A0ARrdaM9lCTGIQRAaTKpzn8RFckupNPpD9MxSHS3VSlKul7HrSmNC2kf7kQ7NzsMthrwA9bCipBEOKKRLlwXCkjZYGT82UUrD6xmn5hcuN-W-8AYiSFrx2p-s9IFiao9IMMM6q_Kt_vqyZ91e9vBfB_sLFlrT`;
    var refreshAccessToken = `1//06qm1K7l2zt1MCgYIARAAGAYSNwF-L9IrUbz90foUtHEnaHbVzUe2Mvt1GttOz8-7enFuL4Eim-cyCpR0xBfIgBe8-_9sTkJ5KZY`;
    var clientSecret = `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`;
    var sheetId = `1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo`;

    // var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rangeURL}?access_token=${accessToken}&valueInputOption=USER_ENTERED`;
    // console.log(url);

    // $.post(url, obj, function(data) {
    //   console.log('goole sheets POST');
    //   console.log(data);
    // });

    // var refreshURL = `https://oauth2.googleapis.com/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshAccessToken}&grant_type=refresh_token`;

    // $.post(refreshURL, function(data) {
    //   console.log('goole api refresh access token');
    //   console.log(data);
    // });

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

    //GET & REFRESH ACCESS TOKEN
    $.post(`https://oauth2.googleapis.com/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshAccessToken}&grant_type=refresh_token`, function(data) {
      console.log(`success access token refreshed`);
      console.log(data)
      var theAccessToken = data.access_token;

      //PUT DATA TO GOOGLE SHEET
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rangeURL}?key=${key}&access_token=${theAccessToken}&valueInputOption=USER_ENTERED`, {
        method: 'PUT',
        headers: {
          "Authorization": `OAuth ${theAccessToken}`
        },
        body: obj

      }).then(function(res) {
        return res.json();
      }).then(function(data) {
        console.log(`success your data has been put on google sheets`);
        console.log(data);
      });

    });


    // CODE THAT FINALLY WORKS!!!
    /*
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo/values/Sheet1!A1%3AM1?key=AIzaSyDFdm54gGbCpuu8rJKAa__QvI1slX8fy0Y&access_token=  ya29.A0ARrdaM9lCTGIQRAaTKpzn8RFckupNPpD9MxSHS3VSlKul7HrSmNC2kf7kQ7NzsMthrwA9bCipBEOKKRLlwXCkjZYGT82UUrD6xmn5hcuN-W-8AYiSFrx2p-s9IFiao9IMMM6q_Kt_vqyZ91e9vBfB_sLFlrT&valueInputOption=USER_ENTERED', {
      method: 'PUT',
      headers: {
        "Authorization": "OAuth ya29.A0ARrdaM9lCTGIQRAaTKpzn8RFckupNPpD9MxSHS3VSlKul7HrSmNC2kf7kQ7NzsMthrwA9bCipBEOKKRLlwXCkjZYGT82UUrD6xmn5hcuN-W-8AYiSFrx2p-s9IFiao9IMMM6q_Kt_vqyZ91e9vBfB_sLFlrT"
      },
      body: JSON.stringify(obj)

    }).then(function(res) {
      return res.json();
    }).then(function(data) {
      console.log(data);
    });
    */

  });

});