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
    var arr = [];
    var date = new Date().toDateString();
    $inputs.map(function(i, val) {
      var value = val.value;
      var type = val.type;
      var name = val.name;
      var checked = val.checked
      var obj = {
        value: value,
        type: type,
        name: name,
      };
      // console.log(obj);
      if (type == 'radio') {
        var inputVal = $(val).closest('.second').prev().find('input').val();
        if (inputVal !== '') {
          if (checked == true) {
            arr.push(obj);
          }
        }

      } else if (type == 'text') {
        if (value !== '') {
          arr.push(obj);
        }
      }

    });

    console.log(arr);
    console.log(date);

  });

});