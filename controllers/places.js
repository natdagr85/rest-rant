//Used to describe restaurants
const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "Banbu Sushi",
      city: "San Diego",
      state: "CA",
      cuisines: "Sushi",
      pic: "/images/sushi.jpg",
    },
    {
      name: "Sammich House Deli",
      city: "San Diego",
      state: "CA",
      cuisines: "Deli",
      pic: "/images/sammich.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
