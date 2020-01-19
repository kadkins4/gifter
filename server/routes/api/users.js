const express   = require('express'),
      mongodb   = require('mongodb');

const router = express.Router();

// Add User
router.get('/', async (req, res) => {
  const users = await loadPostsCollection();

  console.log(users);

  res.send(await users.find({}).toArray());
});
// Get User
router.post('/', async (req, res) => {
  const users = await loadPostsCollection();

  await users.insertOne({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    createdAt: new Date()
  })

  return res.status(201).send();

});
// Update User
// router.put('/:id', async (req, res) => {
//   const users = await loadPostsCollection();

//   await users.findOneAndUpdate({
//     username: req.body.username,
//     password: req.body.password
//   });

//   return res.status(200).send();
// })

// Delete User
router.delete('/:id', async (req, res) => {
  const users = await loadPostsCollection();

  await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

  res.status(200).send();
} )

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
    ('mongodb://kadkins:password1@ds243345.mlab.com:43345/gifterdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    return client.db('gifterdb').collection('users');
}


module.exports = router;