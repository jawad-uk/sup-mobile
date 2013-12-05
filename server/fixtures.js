// Fixture data 
if (Messages.find().count() === 0) {
  var now = new Date().getTime();
  // create two users
  var jawadId = Meteor.users.insert({
    profile: { name: 'Jawad Abdulsamad' }
  });
  var jawad = Meteor.users.findOne(jawadId);
  var talalId = Meteor.users.insert({
    profile: { name: 'Talal Alnafie' }
  });
  var talal = Meteor.users.findOne(talalId);
  
  var msg1 = Messages.insert({
    msgText: 'So. Great weather we are having lately..',
    userId: talal._id,
    sentBy: talal.profile.name,
    sentTime: now - 7 * 3600 * 1000,
  });

  var msg2 = Messages.insert({
    msgText: 'I agree really emphatically with that statement. ',
    userId: jawad._id,
    sentBy: jawad.profile.name,
    sentTime: now - 7 * 3600 * 1000,
  });

  var msg3 = Messages.insert({
    msgText: 'I mean, I REALLY agree',
    userId: jawad._id,
    sentBy: jawad.profile.name,
    sentTime: now - 7 * 3600 * 1000,
  });

  var msg4 = Messages.insert({
    msgText: 'Calm down dude. that\'s just weird..',
    userId: talal._id,
    sentBy: talal.profile.name,
    sentTime: now - 7 * 3600 * 1000,
  });

};