const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const config = require('./config');

const User = require('./models/User');

mongoose.connect(config.getDbUrl(), {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true 
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropCollection('users');
  } catch (error) {
    console.log("Collection was not presented. Skip drop.");
  }

  const [user1, admin1] = await User.create({
    username: 'user1',
    displayName: 'John Doe',
    email: 'johny@test.com',
    avatar: 'avatar.svg',
    password: '123',
    token: nanoid()
  }, {
    username: 'admin1',
    displayName: 'CFO',
    email: 'admin@admin.com',
    avatar: 'cfo.jpg',
    password: '123',
    role: 'admin',
    token: nanoid()
  });

  db.close();
  
})