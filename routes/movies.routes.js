// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

let MoviesModel = require("../models/Movies.model");
let CelebrityModel = require("../models/Celebrity.model");

router.get("/movies/create", (req, res, next) => {
  CelebrityModel.find().then((celebritiesData) => {
    res.render("movies/new-movie.hbs", { celebritiesData });
  });
});

router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  MoviesModel.create({ title, genre, plot, cast })
    .then(() => {
      res.redirect("/movies");
    })

    .catch(() => {});
});

router.get("/movies", (req, res, next) => {
  const { title } = req.query;
  MoviesModel.find(title)
    .then((moviesData) => {
      res.render("movies/movies.hbs", { moviesData });
    })

    .catch(() => {});
});

module.exports = router;
