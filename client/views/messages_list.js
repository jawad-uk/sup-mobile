Template.messagesList.helpers({
	messages: function() {
		return Messages.find();
	}
});

Template.messagesList.rendered = function () {
	console.log("scrolltop is " + $('#layout').scrollTop()),
	$('#layout').scrollTop( $('#layout').prop("scrollHeight") );
};

	


		
