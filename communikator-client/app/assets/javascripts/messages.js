$(function(){


  // $('#messages_button').click(create_message);

});

// function get_all_pirates() {

//   $.ajax({
//   type: "GET",
//   url: "http://4eac.localtunnel.com/pirates.json"
//   //,data: { name: "John", location: "Boston" }
// }).done(function( msg ) {
//   $('#pirates').empty()
//   for (var i=0; i<msg.length; i++) {
//     $('#pirates').prepend('<h1>'+msg[i].name+'</h1>');
//   }
// });

// }



function text() {

  var message_to = $('#to').val();
  var message_text = $('#msg').val();

  $.ajax({
  type: "POST",
  url: "http://4ewd.localtunnel.com/text",
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
  url: "http://4ewd.localtunnel.com/email",
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
  url: "http://4ewd.localtunnel.com/twitter",
  data: { to: message_to, msg: message_text }
  }).done(function( msg ) {
      alert('msg');
  });
}