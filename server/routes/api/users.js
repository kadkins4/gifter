// TODO create a userController that will handle all of these
const express   = require('express'),
      UserModel = require('../../models/User');
      router    = express.Router();

// Get All Users
router.get('/', (req, res) => {
  UserModel.find({})
    .then(each => res.json(each))
    .catch(err => console.error(err));
});

// Get User ID
router.get('/:id', (req, res) => {
  UserModel.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.error(err));
})

// Add User
router.post('/', (req, res) => {
  UserModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(newUser => res.status(201).send(newUser))
    .catch(err => console.error(err));


});
// Update User
router.put('/:id', (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    // TODO rewrite this portion to update only the fields that have changed
    $set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }}, {
      // returns modified
      new: true
    })
    .then(user => res.status(200).send(user))
    .catch(err => console.error(err))
})

// Delete User
router.delete('/:id', (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then(removedUser => res.status(200).send(`Deleted: ${removedUser}`))
    .catch(err => console.error(err))
})

module.exports = router;