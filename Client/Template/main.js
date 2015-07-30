if (Meteor.isClient) {
  ms = 0;//time delay in milliseconds

  startClick = function (bpm) {

    if (bpm>0) {
      document.getElementById('Alert').innerHTML=" ";//resets the alert message if all is well
      ms = parseInt(60000/(bpm));//converts beats per minute to milliseconds
      ticker = setInterval(function(){ document.getElementById('tick').play(); }, ms);
      //creates a global interval that plays the audio eliment every specified milliseconds
    }else{
      //if a bad value is passed we send a message to the user
      document.getElementById('Alert').innerHTML="Must be greater than zero!";
    };
  };


  Template.control.events({
    'click #play': function () {//on click of play input value is sent to startClick function
      startClick(document.getElementById('bpm').value);
    },
    'click #stop': function () {//on click of "stop" interval stops ticking
      clearInterval(ticker);
      ms = 0;
    }
  });

}
