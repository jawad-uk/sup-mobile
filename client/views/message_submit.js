Template.messageSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		console.log('new comment created')

		var message = {
			msgText: $(e.target).find('[name=msg]').val(),
			sentBy: 'anonymous'
		}
		message._id = Messages.insert(message);
		$('.pure-input-rounded').val("");
	}

});