const Joi = require('joi');
const PersonController = require('../Controllers/personController.js');

module.exports = [
  {
    method: 'GET',
    path: '/people',
    handler: PersonController.getPeople,
  },
  {
    method: 'POST',
    path: '/person',
    options: {
      validate: {
        payload: Joi.object({
          firstName: Joi.string().required(),
          lastName: Joi.string().required(),
        }),
        failAction: PersonController.validationFailAction,
      },
    },
    handler: PersonController.createPerson,
  },
  {
    method: 'GET',
    path: '/person/{id}',
    handler: PersonController.getPersonById,
  },
  {
    method: 'PUT',
    path: '/person/{id}',
    options: {
      validate: {
        payload: Joi.object({
          firstName: Joi.string().optional(),
          lastName: Joi.string().optional(),
        }),
        failAction: PersonController.validationFailAction,
      },
    },
    handler: PersonController.updatePerson,
  },
  {
    method: 'DELETE',
    path: '/person/{id}',
    handler: PersonController.deletePerson,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => '404 Error! Page Not Found!',
  },
];
