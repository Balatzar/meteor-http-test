Meteor.publish("allEvents", () => {
  return Event.find();
})