Meteor.subscribe("allEvents");

Template.body.helpers({
  events() {
    return Event.find().count();
  },
})