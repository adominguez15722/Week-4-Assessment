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

app.listen(4000, () => console.log("Server running on 4000"));
