$(function(){


});



function text() {
  alertify.success("Your text has been sent!");

  var message_to = $('#to').val();
  var message_text = $('#msg').val();

  $.ajax({
  type: "POST",
  url: "http://3mu8.localtunnel.com/text",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });


}

function email() {
  alertify.success("Your email has been sent!");

  var message_to = $('#to').val();
  var message_text = $('#msg').val();


  $.ajax({
  type: "POST",
  url: "http://3mu8.localtunnel.com/email",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });
}

function twitter() {
  alertify.success("Your tweet has been sent!");

  var message_to = $('#to').val();
  var message_text = $('#msg').val();

  $.ajax({
  type: "POST",
  url: "http://3mu8.localtunnel.com/twitter",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });
}