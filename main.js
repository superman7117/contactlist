'use strict';

var people = []
var person = {};
var counter = 1;
$(document).ready(function() {
  loadFromStorage();
  updatelist();
  $('#submitContact').on('click', putEmIn);
  $('table').on('click', '.trash', removeFromMemory)
  $('.topinfo').on('click' sorting)

  function loadFromStorage() {
    if(!localStorage.people){
      localStorage.people = '[]';
    }
    people = JSON.parse(localStorage.people)
  }

  function updatelist(){
    people.forEach(function(x){
      if (x === 'nope'){
        return;
      }
      else {person = x;
        // console.log('person from updateList', person, 'people from updateList', people)
        addRow();}
      })
    }

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
    people.push(person)
  }

  function saveToStorage() {
    localStorage.people = JSON.stringify(people);
    // console.log(localStorage.people);
  }

  function addRow(){
    // console.log('person from addRow', person, 'people from addRow', people)
    // console.log('person from addRow', person)
    var $myRows = $('.bottom').clone().removeClass('bottom').addClass('newRow').attr('data', counter);
    $('table').append($myRows);
    $('.newRow > .one').append(person.name).removeClass('one');
    $('.newRow > .two').append(person.email).removeClass('two');
    $('.newRow > .three').append(person.awesome).removeClass('three');
    $('.newRow > .four').append(person.cool).removeClass('four');
    $('#theForm')[0].reset();
    counter += 1;
  }

  function removeFromMemory(){
    var index = $(this).closest('.newRow').attr('data');
    people.splice(index, 1, 'nope');
    $(this).closest('tr').remove();
    saveToStorage()
  }

function sorting(){

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
