$(document).ready(function() {
  // console.log(`v4`);
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
            <input type="radio" name="child${count}-swim" value="no" checked> no
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
    // console.log('submit button clicked');
    $(this).hide();
    $('.sending').show();
    var $inputs = $('form :input');
    // console.log($inputs);

    var arr1 = ['date', 'adult1', 'adult1-swim', 'adult2', 'adult2-swim', 'child1', 'child1-swim', 'child2', 'child2-swim', 'child3', 'child3-swim', 'child4', 'child4-swim'];

    var arr = [];

    var date = new Date().toDateString();

    $inputs.map(function(i, val) {
      var value = val.value;
      var type = val.type;
      var name = val.name;
      var checked = val.checked;
      var objVal = {
        value: value,
        name: name,
        type: type,
      };

      // arr.push(objVal);
      // console.log(obj);

      if (type == 'radio') {
        // var inputVal = $(val).closest('.second').prev().find('input').val();
        // if (inputVal !== '') {
        if (checked == true) {
          arr.push(objVal);
        }
        // }
      } else {
        arr.push(objVal);
      }
      // else if (type == 'text') {
      //   if (value !== '') {
      //     arr.push(objVal);
      //   }
      // }
    });

    // console.log(arr);
    // console.log(date);

    var arr2 = [];

    arr1.map((val, i) => {
      arr.map((obj, j) => {
        // console.log(val, obj.name);
        if (val !== 'date') {
          if (val == obj.name) {
            arr2.push(obj.value);
          }
        }
      });
    });

    arr2.unshift(date);
    arr2 = [arr2];
    // console.log(arr2);

    var range = `Sheet1!A1:M1`;
    var rangeURL = encodeURIComponent(range);

    var obj = {
      "majorDimension": "ROWS",
      "range": range,
      "values": arr2,
    };

    obj = JSON.stringify(obj);
    // console.log(typeof obj);
    // console.log(obj);

    //URL TO GET CODE
    // https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/spreadsheets&prompt=consent&access_type=offline&response_type=code&redirect_uri=https%3A//coolguy206.github.io&client_id=684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com

    //URL TO GET ACCESS TOKEN FROM CODE
    var key = `AIzaSyDFdm54gGbCpuu8rJKAa__QvI1slX8fy0Y`;
    var clientId = `684411187765-8hbqvl6ar7s5gvc1ov882pl5oenitvoc.apps.googleusercontent.com`;
    var clientSecret = `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`;

    var accessToken = `ya29.a0ARrdaM-pajh8Yb-4MUdVo10E0_fkEMc5-oVOvMhal6eVJkkAUOHBHn4d_iFDr03pVUKO_1zo8aSF63bSabeNhp4nPeeJ9j6fF80KPFEOxzdoCqHCQzIU7bC8zx0FCF9_J0vjBgR8wpgbWiThP4yfANiI7ZDO`;
    var refreshAccessToken = `1//06tYYZ-xESNdTCgYIARAAGAYSNwF-L9IrYoLL3sr8rrTSv0oHnl41lxGSjDFYBbRUugbyizQQALuXS8hb6FHTOfu2CXymo077qsM`;

    var sheetId = `1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo`;

    //CODE TO GET ACCESS TOKEN
    // var theCode = `4/0AX4XfWgxS7d7bqn_c3a1IgjIQfQHRbhXpghrHcCqWPt-FOtzpIMeUnMw04OBc1TKa2eMrg`;

    //URL TO GET ACCESS TOKEN FROM CODE
    // $.post(`https://oauth2.googleapis.com/token?code=${theCode}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=https%3A//coolguy206.github.io&grant_type=authorization_code`, function(data) {
    //   console.log(data);
    // });

    //GET & REFRESH ACCESS TOKEN
    $.post(`https://oauth2.googleapis.com/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshAccessToken}&grant_type=refresh_token`, function(data) {
      console.log(`success access token refreshed`);
      console.log(data)
      var theAccessToken = data.access_token;

      //PUT DATA TO GOOGLE SHEET
      /*
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
      */

      //APPEND DATA TO GOOGLE SHEET POST
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${rangeURL}:append?key=${key}&access_token=${theAccessToken}&valueInputOption=USER_ENTERED`, {
        method: `POST`,
        headers: {
          "Authorization": `OAuth ${theAccessToken}`
        },
        body: obj
      }).then(function(res) {
        return res.json();
      }).then(function(data) {
        console.log(`success your data has been put on google sheets`);
        console.log(data);
        setTimeout(function() {
          $('.sending').fadeOut(function() {
            $('#parent1').text(arr2[0][1])
            $('.thank-you').fadeIn();
          });
        }, 3000);
      });

    }).fail(function(err) {
      console.log(`oops`);
      console.log(err.responseJSON.error_description);
      setTimeout(function() {
        $('.sending').fadeOut(function() {
          $('.error').fadeIn();
        });
      }, 3000);
    });

  });
});