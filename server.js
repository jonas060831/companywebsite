const express = require(`express`);
const app = express();

const PORT = 3000;

const staff = [
    {
      name: "John Doe",
      jobTitle: "Software Engineer",
      email: "johndoe@example.com",
      phoneNumber: "123-456-7890",
      bio: "John is a passionate software engineer with 5 years of experience in full-stack development. He loves solving complex problems and is always eager to learn new technologies."
    },
    {
      name: "Jane Smith",
      jobTitle: "Product Manager",
      email: "janesmith@example.com",
      phoneNumber: "234-567-8901",
      bio: "Jane is an experienced product manager who thrives in agile environments. With a background in marketing and design, she bridges the gap between customers and developers."
    },
    {
      name: "Emily Johnson",
      jobTitle: "UX/UI Designer",
      email: "emilyj@example.com",
      phoneNumber: "345-678-9012",
      bio: "Emily is a creative UX/UI designer who focuses on user-centric design. She believes in creating intuitive and visually appealing interfaces that enhance user experience."
    },
    {
      name: "Michael Lee",
      jobTitle: "HR Specialist",
      email: "michaellee@example.com",
      phoneNumber: "456-789-0123",
      bio: "Michael is an HR specialist who excels in recruitment and employee relations. He is passionate about fostering a positive work culture and helping teams grow."
    },
    {
      name: "Alice Walker",
      jobTitle: "CEO",
      email: "alicewalker@example.com",
      phoneNumber: "567-890-1234",
      bio: "Alice is the visionary CEO of the company. With over 15 years of leadership experience, she has successfully driven growth and innovation, always focusing on building a sustainable, customer-centric business."
    }
  ]
  
  const products = [
    {
      name: "GFuel Energy Formula",
      flavor: "Bahama Mama",
      description: "A tropical, island-inspired flavor featuring pineapple, orange, and coconut. Bahama Mama is one of GFuel's most popular flavors for a refreshing, energizing boost.",
      price: "$39.99",
      rating: 4.7 // Out of 5 stars
    },
    {
      name: "GFuel Energy Formula",
      flavor: "Blue Ice",
      description: "Blue Ice offers a sweet and tangy blue raspberry flavor. It's a favorite among GFuel users for its balance of fruity sweetness and refreshment.",
      price: "$39.99",
      rating: 4.6 // Out of 5 stars
    },
    {
      name: "GFuel Energy Formula",
      flavor: "Battle Juice",
      description: "Battle Juice is a delicious, fruity blend with a mix of tropical flavors like pineapple and mango. It's known for delivering a punch of energy and taste.",
      price: "$39.99",
      rating: 4.8 // Out of 5 stars
    },
    {
      name: "GFuel Energy Formula",
      flavor: "Fazeberry",
      description: "Fazeberry combines a mix of berries, including strawberry, raspberry, and blueberry. It's one of the most iconic flavors, beloved by fans of the FaZe Clan.",
      price: "$39.99",
      rating: 4.9 // Out of 5 stars
    }
  ];




// home page aka products
app.get(`/`, (req, res) => {
    res.render(`home.ejs`, {products})
})

// past work
app.get(`/pastwork`, (req, res) => {
    res.render(`pastwork.ejs`)
})

// company history
app.get(`/companyhistory`, (req, res) => {
    res.render(`history.ejs`)
})

// staff page
app.get(`/staff`, (req, res) => {
    res.render(`staff.ejs`)
})

// contact
app.get(`/contact`, (req, res) => {
    res.render(`contact.ejs`)
})

app.get(`/footer`, (req, res) => {

})





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});