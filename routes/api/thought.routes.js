const router = require('express').Router();

// Todo: Import controller operations here

// Defining the http requests route for /api/users
router.route('/')
  .get()
  .post();

// Defining the http requests route for /api/users/:thoughtId (with id)
router.route('/:thoughtId')
  .get()
  .put()
  .delete();

module.exports = router;