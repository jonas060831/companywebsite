const express = require(`express`);
const app = express();
const PORT = 3000;
app.use(express.static('public'));


// DB Below ==============================================================================================================
const staff = [
  {
    image: "https://i.pravatar.cc/150?img=02",
    name: "Ian Walker",
    jobTitle: "CEO",
    email: "alicewalker@example.com",
    phoneNumber: "567-890-1234",
    bio: "Alice is the visionaryd CEO of the company. With over 15 years of leadership experience, she has successfully driven growth and innovation, always focusing on building a sustainable, customer-centric business."
  },
    {
      image: "https://i.pravatar.cc/150?img=50",
      name: "John Doe",
      jobTitle: "Software Engineer",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
      bio: "John is a passionate software engineer with 5 years of experience in full-stack development. He loves solving complex problems and is always eager to learn new technologies."
    },
    {
      image: "https://i.pravatar.cc/150?img=18",
      name: "Peter Parker",
      jobTitle: "Software Engineer",
      email: "peterparker@example.com",
      phoneNumber: "123-456-7190",
      bio: "Peter is a passionate software engineer with 5 years of experience in full-stack development. He loves solving complex problems and is always eager to learn new technologies."
    },
    
    {
      image: "https://i.pravatar.cc/150?img=05",
      name: "Jane Smith",
      jobTitle: "Product Manager",
      email: "janesmith@example.com",
      phoneNumber: "234-567-8901",
      bio: "Jane is an experienced product manager who thrives in agile environments. With a background in marketing and design, she bridges the gap between customers and developers."
    },
    {
      image: "https://i.pravatar.cc/150?img=03",
      name: "Andrew Johnson",
      jobTitle: "UX UI Designer",
      email: "emilyj@example.com",
      phoneNumber: "345-678-9012",
      bio: "Emily is a creative UX/UI designer who focuses on user-centric design. She believes in creating intuitive and visually appealing interfaces that enhance user experience."
    },
    {
      image: "https://i.pravatar.cc/150?img=01",
      name: "Alice Lee",
      jobTitle: "HR Specialist",
      email: "michaellee@example.com",
      phoneNumber: "456-789-0123",
      bio: "Michael is an HR specialist who excels in recruitment and employee relations. He is passionate about fostering a positive work culture and helping teams grow."
    }
  ]
  
// const products = [
//     {
//       name: "GFuel Energy Formula",
//       flavor: "Bahama Mama",
//       description: "A tropical, island-inspired flavor featuring pineapple, orange, and coconut. Bahama Mama is one of GFuel's most popular flavors for a refreshing, energizing boost.",
//       price: "$39.99",
//       rating: 4.7 // Out of 5 stars
//     },
//     {
//       name: "GFuel Energy Formula",
//       flavor: "Blue Ice",
//       description: "Blue Ice offers a sweet and tangy blue raspberry flavor. It's a favorite among GFuel users for its balance of fruity sweetness and refreshment.",
//       price: "$39.99",
//       rating: 4.6 // Out of 5 stars
//     },
//     {
//       name: "GFuel Energy Formula",
//       flavor: "Battle Juice",
//       description: "Battle Juice is a delicious, fruity blend with a mix of tropical flavors like pineapple and mango. It's known for delivering a punch of energy and taste.",
//       price: "$39.99",
//       rating: 4.8 // Out of 5 stars
//     },
//     {
//       name: "GFuel Energy Formula",
//       flavor: "Fazeberry",
//       description: "Fazeberry combines a mix of berries, including strawberry, raspberry, and blueberry. It's one of the most iconic flavors, beloved by fans of the FaZe Clan.",
//       price: "$39.99",
//       rating: 4.9 // Out of 5 stars
//     }
//   ];


const products = [
  {
    imageUrl: '/src/products/bahama mama.png',
    name: "GFuel Energy Formula",
    flavor: "Bahama Mama",
    description: "A tropical, island-inspired flavor featuring pineapple, orange, and coconut. Bahama Mama is one of GFuel's most popular flavors for a refreshing, energizing boost.",
    price: "$39.99",
    rating: 4.7 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/blue ice.png',
    name: "GFuel Energy Formula",
    flavor: "Blue Ice",
    description: "Blue Ice offers a sweet and tangy blue raspberry flavor. It's a favorite among GFuel users for its balance of fruity sweetness and refreshment.",
    price: "$39.99",
    rating: 4.6 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/battle juice.png',
    name: "GFuel Energy Formula",
    flavor: "Battle Juice",
    description: "Battle Juice is a delicious, fruity blend with a mix of tropical flavors like pineapple and mango. It's known for delivering a punch of energy and taste.",
    price: "$39.99",
    rating: 4.8 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/fazeberry.png',
    name: "GFuel Energy Formula",
    flavor: "Fazeberry",
    description: "Fazeberry combines a mix of berries, including strawberry, raspberry, and blueberry. It's one of the most iconic flavors, beloved by fans of the FaZe Clan.",
    price: "$39.99",
    rating: 4.9 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/rainbow sherbet.png',
    name: "GFuel Energy Formula",
    flavor: "Rainbow Sherbet",
    description: "Inspired by classic rainbow sherbet ice cream, this flavor delivers a smooth, creamy taste with a hint of fruity sweetness.",
    price: "$39.99",
    rating: 4.9 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/watermelon.png',
    name: "GFuel Energy Formula",
    flavor: "Watermelon",
    description: "A light and refreshing watermelon flavor that's sweet and smooth. Ideal for fans of a juicy, summery taste.",
    price: "$39.99",
    rating: 4.7 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/sour blue chug rug.png',
    name: "GFuel Energy Formula",
    flavor: "Sour Blue Chug Rug",
    description: "A unique blue raspberry flavor with a sour twist. This flavor was inspired by YouTuber FaZe Rug and has become a fan favorite.",
    price: "$19.99",
    rating: 4.6 // Out of 5 stars
  },
  {
    imageUrl: '/src/products/peach rings.png',
    name: "GFuel Energy Formula",
    flavor: "Peach Rings",
    description: "A delicious peach candy flavor that brings back memories of classic peach ring gummies. Sweet, nostalgic, and energizing.",
    price: "$39.99",
    rating: 5.00 // Out of 5 stars
  },
  {
    name: "GFuel Energy Formula",
    flavor: "Tropical Rain",
    description: "A mix of tropical fruits like kiwi, pineapple, and berry flavors for a refreshing and exotic taste experience.",
    price: "$19.99",
    rating: 4.8 // Out of 5 stars
  }
];


  const history = `
  Once upon a time, in a small town known for its sleepy afternoons and overly enthusiastic birdwatchers, lived a man named Ian Walker. Ian was an average guy with an extraordinary dream: to create the ultimate energy drink that would not only fuel gamers but also taste like a rainbow exploded in your mouth.
  
  One fateful day, while Ian was deep in a marathon gaming session of "Space Hamsters: Galactic Showdown," he realized he needed a boost. His coffee was cold, his energy bars were stale, and his cat, Mr. Whiskers, had knocked over his last can of soda. Desperate for a solution, Ian decided to take matters into his own hands.
  
  Armed with a blender, a questionable assortment of ingredients, and a determination that could rival a caffeinated squirrel, Ian began his quest. He mixed everything from blueberries to broccoli, and even a dash of his grandma’s secret pie spice. The result? A concoction that glowed in the dark and smelled like a fruit stand on steroids.
  
  Despite the initial setbacks (including an unfortunate incident where his neighbor’s dog turned neon green), Ian persevered. He tweaked his formula, adding a pinch of this and a splash of that, until he finally created a drink that was both delicious and energizing. He called it "Gfuel," short for "Gamer Fuel," because, well, it was fuel for gamers.
  
  Word of Ian’s magical elixir spread like wildfire. Gamers from all corners of the globe flocked to his tiny kitchen, eager to get their hands on the legendary Gfuel. Ian’s humble abode quickly transformed into a bustling headquarters, complete with a makeshift lab and a vending machine that dispensed motivational quotes.
  
  Today, Gfuel is a household name, known for its vibrant flavors and the boundless energy it provides. And as for Ian Walker? He’s still gaming, still innovating, and still occasionally finding neon green paw prints around his house.
  `;
  



  const gfuelEvents = [
    {
        date: "2021-06-15",
        event: "Gfuel Galactic Gaming Festival",
        description: "A massive online gaming festival where participants from around the globe competed in various tournaments. Special appearances were made by top streamers, and exclusive Gfuel flavors were launched during the event."
    },
    {
        date: "2022-03-22",
        event: "Gfuel Energy Marathon",
        description: "A unique marathon where participants had to run while drinking Gfuel for energy boosts. The event featured obstacle courses and fun challenges, with proceeds going to charity."
    },
    {
        date: "2022-11-05",
        event: "Gfuel Extreme Sports Challenge",
        description: "An adrenaline-pumping event featuring extreme sports like skydiving, bungee jumping, and skateboarding. Gfuel sponsored the athletes and provided energy drinks to keep the participants fueled throughout the day."
    },
    {
        date: "2023-02-14",
        event: "Gfuel Valentine's Day Speed Dating",
        description: "A fun and energetic speed dating event where participants enjoyed Gfuel mocktails while meeting potential matches. It was a night full of laughter, energy, and maybe even love!"
    },
    {
        date: "2023-08-30",
        event: "Gfuel Summer Beach Party",
        description: "A vibrant beach party held at a popular coastal location. The event featured live music, beach games, and special beach-themed Gfuel drinks. Attendees danced the night away under the stars."
    },
    {
        date: "2024-01-01",
        event: "Gfuel New Year's Resolution Kickoff",
        description: "A motivational event to help people kickstart their New Year's resolutions. Participants enjoyed a range of fitness classes, wellness workshops, and of course, plenty of Gfuel to stay energized."
    },
    {
        date: "2024-04-01",
        event: "Gfuel April Fools' Day Prankathon",
        description: "A hilarious event filled with pranks and practical jokes. Gfuel teamed up with popular pranksters to create a day of laughter and surprises. Special edition prank-themed Gfuel flavors were released."
    },
    {
        date: "2024-07-04",
        event: "Gfuel Independence Day Bash",
        description: "A patriotic celebration with fireworks, BBQs, and live performances. Gfuel sponsored the event with themed drinks and a giant Gfuel fireworks display to cap off the night."
    }
];

const socials = [
  { "domain": "instagram", "url": "https://www.instagram.com/gfuelenergy/" },
  { "domain": "twitter", "url":"https://twitter.com/GFuelEnergy" },
  { "domain": "facebook", "url": "https://www.facebook.com/GFuelEnergy/" },
  { "domain": "youtube", "url": "https://www.youtube.com/user/GFuelEnergy" },
  { "domain": "tiktok", "url":"https://www.tiktok.com/@gfuelenergy" },
  { "domain": "discord", "url": "https://discord.gg/gfuel" },
  { "domain" : "reddit",  "url": "https://www.reddit.com/r/GFUEL/"}
]
// Routes below=========================================================================================================================================


// home page aka products
app.get(`/`, (req, res) => {

    //get pich ring using name and add it to the object newFavorite
    const newFavorite = products.find( product => product.flavor === 'Peach Rings')

    res.render(`home.ejs`, {products , socials, newFavorite})
})

// past work
app.get(`/pastwork`, (req, res) => {
    res.render(`pastwork.ejs`, {
      gfuelEvents,
      socials
    })

})

// company history
app.get(`/companyhistory`, (req, res) => {
    res.render(`history.ejs`, {
      staff,
      history,
      socials
    })
})

//create a variable where i can group them by roles
const groupedStaff = staff.reduce((accumulator, item) => {
  const role = item.jobTitle

  if(!accumulator[role]) accumulator[role] = []

  accumulator[role].push(item)

  return accumulator
}, {})

// staff page
app.get(`/staff`, (req, res) => {

  //create a variable where i can group them by roles
  return res.render('staff.ejs', { groupedStaff, socials })
})
//staff/<job title>/array index
app.get(`/staff/:jobTitle/:arrayIndex`, (req, res) => {

  const { jobTitle, arrayIndex } = req.params

  //get all the job titles in the object
  const jobTitles = Object.keys(groupedStaff)

  //check if the req.query.jobTitle is in the jobTitles array
  const jobTitleCode = jobTitles.find(jt => jt === jobTitle)
  
  ////show this page if the jobTitle is not found as well as a non existent index
  //jobTitleCode does not exist or if the index in groupedStaff does not exist
  if(jobTitleCode === undefined) return res.render('staffnotfound.ejs', { socials })
  //check if the req.query.arrayIndex exist in our groupedStaff Object
  const positionIndexInArray = groupedStaff[jobTitleCode][arrayIndex]
  if(positionIndexInArray === undefined) return res.render('staffnotfound.ejs', { socials })

  const selectedPerson = groupedStaff[jobTitle][parseInt(arrayIndex)]



  
  return res.render('staffByJTAndIndex.ejs', { selectedPerson, jobTitle, socials })
})


// contact
app.get(`/contact`, (req, res) => {
    res.render(`contact.ejs`, {
      staff,
      history,
      socials
    })
})






app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});