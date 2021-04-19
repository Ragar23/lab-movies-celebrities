const router = require("express").Router();

//Link the Middleware - DONE
//Require the model
let CelebrityModel = require("../models/Celebrity.model");
router.get("/celebrities/create", (req, res, next) => {
  CelebrityModel.find()
    .then(() => {
      res.render("celebrities/new-celebrities.hbs");
    })

    .catch(() => {});
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create({ name, occupation, catchPhrase })
    .then(() => {
      res.render("celebrities/celebrities.hbs");
    })

    .catch(() => {
      res.render("celebrities/new-celebrities.hbs");
    });
});

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then((celebritiesData) => {
      res.render("celebrities/celebrities.hbs", { celebritiesData });
    })

    .catch((err) => {
      console.log("not working", err);
    });
});

module.exports = router;
