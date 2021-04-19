const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: {
    type: Schema.Types.ObjectId,
    ref: "Celebrity",
  },
});

const MoviesModel = model("movies", moviesSchema);

module.exports = MoviesModel;
