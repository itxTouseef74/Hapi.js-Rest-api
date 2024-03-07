const Mongoose = require('mongoose');

const PersonSchema = new Mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
});

const PersonModel = Mongoose.model('Person', PersonSchema);

module.exports = PersonModel;
