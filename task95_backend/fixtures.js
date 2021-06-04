const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const config = require('./config');

const User = require('./models/User');
const Cocktail = require('./models/Cocktail');

mongoose.connect(config.getDbUrl(), {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true 
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropCollection('users');
    await db.dropCollection('cocktails');
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

  await Cocktail.create({
    name: 'Rhubarb gin',
    image: 'rhubarb.webp',
    user: user1._id,
    recipe: `
      STEP 1
      Wash the rhubarb, trim the stalks and discard the base and any leaves. Cut the stalks into 3cm lengths. Put in a large jar with the sugar. Shake everything around, put the lid on and leave overnight. The sugar will draw the juice out of the rhubarb.
      
      STEP 2
      After 24 hrs, add the gin, seal and shake everything around. Leave for about 4 weeks before drinking. You can strain the liquor off through a muslin-lined sieve and transfer to a bottle, but I often just leave the rhubarb and booze in the jar and ladle it into drinks that way. Over time the rhubarb and the gin go a much paler colour – this doesn’t look as dramatic. The upside is you that have to get through it fairly quickly!
    `,
    published: false,
    ingredients: [{
      name: 'pink rhubarb stalks',
      qty: '1',
      id: nanoid()
    }, {
      name: 'caster sugar',
      qty: '400g',
      id: nanoid()
    }, {
      name: 'gin',
      qty: '800ml',
      id: nanoid()
    }]
  }, {
    name: 'Easy sangria',
    image: 'sangria.webp',
    user: user1._id,
    recipe: `
      STEP 1
      Put the chopped fruit in a bowl and sprinkle over the sugar and cinnamon, then stir to coat. Cover and leave to macerate in the fridge for at least 1 hr, or ideally overnight.

      STEP 2
      Fill a large jug with ice. Stir the macerated fruit mixture to ensure the sugar is dissolved, then tip into the jug with the wine and brandy. Stir, then top up with the sparkling water and serve.
    `,
    published: false,
    ingredients: [{
      name: 'oranges',
      qty: '2',
      id: nanoid()
    }, {
      name: 'pears',
      qty: '2',
      id: nanoid()
    }, {
      name: 'lemons',
      qty: '2',
      id: nanoid()
    }, {
      name: 'red berries',
      qty: '200g',
      id: nanoid()
    }, {
      name: 'caster sugar',
      qty: '3 tbsp',
      id: nanoid()
    }, {
      name: 'light red wine',
      qty: '750ml',
      id: nanoid()
    }, {
      name: 'Spanish brandy',
      qty: '100ml',
      id: nanoid()
    }, {
      name: 'sparkling water',
      qty: '300ml',
      id: nanoid()
    }]
  })

  db.close();
  
})