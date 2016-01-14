'use strict';

$(document).ready(function() {
  loadFromStorage()
  $('#submitContact').on('click', putEmIn);
  $('table').on('click', '.trash', removeFromMemory)

  var person = {};
  function putEmIn(e){
    e.preventDefault();
    makePerson();
    saveToStorage();
    addRow();
  }

  function makePerson(){
    person.name = $('#name').val();
    person.email = $('#email').val();
    // Number($('#awesomelevel').val());
    person.awesome = 2;
    person.cool = $('#coolFactor').val();

  }
  function addRow(){
    var $myRows = $('.bottom').clone().removeClass('bottom').addClass('newRow');
    $('table').append($myRows);
    $('.newRow > .one').append(person.name).removeClass('one');
    $('.newRow > .two').append(person.email).removeClass('two');
    $('.newRow > .three').append(person.awesome).removeClass('three');
    $('.newRow > .four').append(person.cool).removeClass('four');
    $('.newRow > .five').append().removeClass('five');
    $('#theForm')[0].reset();
  }

  function saveToStorage() {
    localStorage.person = JSON.stringify(person);
    console.log(localStorage.person);
  }

  function loadFromStorage() {
    if(!localStorage.person){
      localStorage.person = '[]';
    }
    person = JSON.parse(localStorage.person)
  }

  function removeFromMemory(){
    var index = $(this).closest('tr').remove();
  }

  //
  //  var counterArray = [];
  // $('body').on("click", "*", function(){})
  //  function mather(){
  //    var fiver = counterArray.reduce(function(acc, e){
  //      return acc = e + acc;
  //    })
  //    function commaSeparateNumber(val){
  //      while (/(\d+)(\d{3})/.test(val.toString())){
  //        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  //      }
  //      return val;
  //    }
  //    fiver = commaSeparateNumber(fiver);
  //    $('#balance').children().remove();
  //    $('#balance').append('<span>$'+fiver+'</span>')
  //    return fiver;
  //  }
  //
  //
  //
  //  function onlyAll(){
  //    $('.newRow').not('.bottom').show();
  //    $('.showVDT').remove();
  //    $('.showVWT').remove();
  //  }
  //
  //  function onlyDeposits(){
  //    $('.newRow').show();
  //    $('.newRowW').hide();
  //    var sum = 0;
  //    $('.newRow').children('.depo').text().split('$').forEach(function(e){
  //      sum +=  Number(e);
  //      return sum;
  //    });
  //    $('table').append('<div class="showVDT">Deposit Total $'+sum+'</div>');
  //    $('.showVWT').remove();
  //  }
  //
  //  function onlyWithdrawals(){
  //    $('.newRowW').show();
  //    $('.newRow').hide();
  //    $('.showVDT').remove();
  //    var sum = 0;
  //    $('.newRowW').children('.with').text().split('$').forEach(function(e){
  //      sum +=  Number(e);
  //      console.log('sum', sum);
  //    });
  //    console.log(sum);
  //    $('table').append('<div class="showVWT">Withdrawal Total $'+sum+'</div>');
  //  }
  //
  //  function takeOff(){
  //    var deleteD = $(this).parent().parent('.newRow').children('.depo').text();
  //    var deD = Number(deleteD.slice(1))*-1;
  //    var deleteW = $(this).parent().parent('.newRowW').children('.with').text();
  //    var deW = Number(deleteW.slice(1))*-1;
  //    counterArray.push(parseFloat(deW));
  //    counterArray.push(deD);
  //    mather();
  //    $(this).parent().parent().remove();
  //  }

})
