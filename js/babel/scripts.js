"use strict";

require('dotenv').config();

console.log(process.env);
/*
$(document).ready(function() {

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

    // .serialize()
    console.log(arr);
    console.log(date);

    var range = `Sheet1!A1:M1`;

    var obj = {
      "range": range,
      "majorDimension": "ROWS",
      "values": arr,
    };

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

    var sheetId = `1UkoueEhKq7ogT9Z557tX_tTHAC1qeLaw0zFo5j3CcMo`;
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?valueInputOption=${obj}`;

    $.post(url, function(data) {
      console.log('goole sheets POST');
      console.log(data);
    });


  });

});
*/
//# sourceMappingURL=scripts.js.map
