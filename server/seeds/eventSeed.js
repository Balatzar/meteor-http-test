const event = {
  id: 1000,
  nom: "GHPLU"
}

if (!Event.find().count()) {
  Event.insert(event);
}