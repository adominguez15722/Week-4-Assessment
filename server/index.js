const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["A new perspective will come with the new year",
          "A gambler not only will lose what he has, but also will lose what he doesn't have",
          "A good friendship is often more important than a passionate romance.",
          "Advice, when most needed, is least heeded.",
          "Depart not from the path which fate has you assigned."
];

  let randNum = Math.floor(Math.random() * fortunes.length);
  let randFort = fortunes[randNum];

  res.status(200).send(randFort);
});



const classmates = ["Daniel",
           "Juan",
           "Lucas", "Nick", "Bill"]


app.get("/api/classmates", (req, res) => {
 
  res.status(200).send(classmates);

});

app.get("/api/compliments", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  
  res.status(200).send(compliments)
})

app.get("/api/fortunes", (req, res) => {
  const fortunes = ["A new perspective will come with the new year",
          "A gambler not only will lose what he has, but also will lose what he doesn't have",
          "A good friendship is often more important than a passionate romance.",
          "Advice, when most needed, is least heeded.",
          "Depart not from the path which fate has you assigned."
];

  res.status(200).send(fortunes);
});


//  only works once at the moment when server is restarted
app.delete("/api/classmates/:classmate", (req, res) => {

  let {classmate} = req.params
  for(let i = 0; i < classmates.length; i++)  {
    if(classmates[i] === classmate) {
      classmates.splice(i, 1)
      res.status(200).send(`${classmate} removed`)
      return
    }
  }
  res.status(400).send("Classmate not found")
})

app.put("/api/:classmate", (req, res) => {

  // res.send(console.log(req.params))
  
  let {classmate} = req.params
  let newMate = 'Danny'
 

  for (let i = 0; i < classmates.length; i++) {
    if (classmates[i] === classmate) {
      classmates[i] = newMate
      console.log(classmates)
      res.status(200).send(classmates)
      return
    }
  }
  res.status(400).send("Classmate not found.")
})

//  not working yet


app.post("/api/:classmate", (req, res) => {
  let {classmate} = req.params

  classmates.push(classmate)

  res.status(200).send(classmates)
})





app.listen(4000, () => console.log("Server running on 4000"));
