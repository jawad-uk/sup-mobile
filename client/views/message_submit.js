Template.messageSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    console.log('new comment created')
    
    // var user = Meteor.user(); 

    var message = {
      msgText: $(e.target).find('[name=msg]').val(),
      sentBy: "unknown user"
      // sentBy: user.profile.name,
      // userId: user._id
    }
    message._id = Messages.insert(message);
    $('.contactField').val("");
  }
});