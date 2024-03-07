const PersonModel = require('../Models/personModel.js');
const Joi = require('joi');

const getPeople = async (request, h) => {
  try {
    const people = await PersonModel.find().exec();
    return h.response(people);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const createPerson = async (request, h) => {
  try {
    const person = new PersonModel(request.payload);
    const result = await person.save();
    return h.response(result);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const getPersonById = async (request, h) => {
  try {
    const person = await PersonModel.findById(request.params.id).exec();
    return h.response(person);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const updatePerson = async (request, h) => {
  try {
    const result = await PersonModel.findByIdAndUpdate(request.params.id, request.payload, { new: true });
    return h.response(result);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const deletePerson = async (request, h) => {
  try {
    const result = await PersonModel.findByIdAndDelete(request.params.id);
    return h.response(result);
  } catch (error) {
    return h.response(error).code(500);
  }
};

const validationFailAction = (request, h, error) => {
  return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
};

module.exports = {
  getPeople,
  createPerson,
  getPersonById,
  updatePerson,
  deletePerson,
  validationFailAction,
};
