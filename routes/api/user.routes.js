const router = require('express').Router();

// Todo: Import controller operations here
const { createUser } = require('../../controllers/users.controller'); 

// Defining the http requests route for /api/users
router.route('/')
  .get()
  .post(createUser);

// Defining the http requests route for /api/users/:userId (with id)
router.route('/:userId')
  .get()
  .put()
  .delete();

module.exports = router;