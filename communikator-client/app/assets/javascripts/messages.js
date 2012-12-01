$(function(){

});



function text() {

  var message_to = $('#to').val();
  var message_text = $('#msg').val();

  $.ajax({
  type: "POST",
  url: "http://4xma.localtunnel.com/text",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });
}

function email() {

  var message_to = $('#to').val();
  var message_text = $('#msg').val();



  $.ajax({
  type: "POST",
  url: "http://4xma.localtunnel.com/email",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });
}

function twitter() {

  var message_to = $('#to').val();
  var message_text = $('#msg').val();

  $.ajax({
  type: "POST",
  url: "http://4xma.localtunnel.com/twitter",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });
}