Meteor.subscribe("allEvents");

Template.app.helpers({
  nbEvents() {
    return Event.find().count();
  },
})