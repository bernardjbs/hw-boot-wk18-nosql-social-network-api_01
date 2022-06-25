const router = require('express').Router();

// Todo: Import controller operations here

// Defining the http requests route for /api/users
router.route('/')
  .get()
  .post();

// Defining the http requests route for /api/users/:userId (with id)
router.route('/:userId')
  .get()
  .put()
  .delete();

module.exports = router;