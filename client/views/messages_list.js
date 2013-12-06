Template.messagesList.helpers({
	messages: function() {
		return Messages.find();
	}
});

Template.messagesList.rendered = function () {
	console.log("scrolltop is " + $('#list').scrollTop());
	$('#list').scrollTop( $('#list').prop("scrollHeight") );
};

	


		
