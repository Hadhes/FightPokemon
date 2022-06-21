var express = require("express");
var router = express.Router();

var request = require("sync-request");

/* GET home page. */
router.get("/", function (req, res, next) {
  const number = Math.floor(Math.random() * 152);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${number}`);
  const dataAPI = JSON.parse(data.body);

  const number2 = Math.floor(Math.random() * 152);
  const data2 = request("GET", `https://pokeapi.co/api/v2/pokemon/${number2}`);
  const dataAPI2 = JSON.parse(data2.body);

  //Noms FR Pokemon
  const data13 = request(
    "GET",
    `https://pokeapi.co/api/v2/pokemon-species/${dataAPI2.name}`
  );
  const nomPokemonData = JSON.parse(data13.body);
  const nomPokemonFR = nomPokemonData.names[4].name;

  const data14 = request(
    "GET",
    `https://pokeapi.co/api/v2/pokemon-species/${dataAPI.name}`
  );
  const nomPokemonVSData = JSON.parse(data14.body);
  const nomPokemonFRVS = nomPokemonVSData.names[4].name;

  //Nature Pokemon
  const number3 = Math.floor(Math.random() * 26);
  const data11 = request("GET", `https://pokeapi.co/api/v2/nature/${number3}`);
  const natureData = JSON.parse(data11.body);
  const nature = natureData.name;

  //Nature PokemonVS
  const number4 = Math.floor(Math.random() * 26);
  const data12 = request("GET", `https://pokeapi.co/api/v2/nature/${number4}`);
  const natureVSData = JSON.parse(data12.body);
  const natureVS = natureVSData.name;

  // Attaque Pokemon
  const number5 = Math.floor(Math.random() * dataAPI2.moves.length);
  const nameAtt1 = dataAPI2.moves[number5].move.name;
  const data3 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt1}`);
  const attaque1 = JSON.parse(data3.body);

  const number6 = Math.floor(Math.random() * dataAPI2.moves.length);
  const nameAtt2 = dataAPI2.moves[number6].move.name;
  const data4 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt2}`);
  const attaque2 = JSON.parse(data4.body);

  const number7 = Math.floor(Math.random() * dataAPI2.moves.length);
  const nameAtt3 = dataAPI2.moves[number7].move.name;
  const data5 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt3}`);
  const attaque3 = JSON.parse(data5.body);

  const number8 = Math.floor(Math.random() * dataAPI2.moves.length);
  const nameAtt4 = dataAPI2.moves[number8].move.name;
  const data6 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt4}`);
  const attaque4 = JSON.parse(data6.body);

  // Attaque Pokemon adverse
  const nameAtt1VS = dataAPI.moves[0].move.name;
  const data7 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt1VS}`);
  const attaque1VS = JSON.parse(data7.body);

  const nameAtt2VS = dataAPI.moves[1].move.name;
  const data8 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt2VS}`);
  const attaque2VS = JSON.parse(data8.body);

  const nameAtt3VS = dataAPI.moves[2].move.name;
  const data9 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt3VS}`);
  const attaque3VS = JSON.parse(data9.body);

  const nameAtt4VS = dataAPI.moves[3].move.name;
  const data10 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt4VS}`);
  const attaque4VS = JSON.parse(data10.body);

  //Pokemon adverse
  const nombreTypeVS = dataAPI.types.length;
  const type1VS = dataAPI.types[0].type.name;
  let type2VS = "neutre";
  if (nombreTypeVS === 2) {
    type2VS = dataAPI.types[1].type.name;
  }
  let pv1 = Math.floor(
    ((2 * dataAPI.stats[0].base_stat + 31 + 255 / 4) * 100) / 100 + 110
  );
  let pvMax1 = Math.floor(
    ((2 * dataAPI.stats[0].base_stat + 31 + 255 / 4) * 100) / 100 + 110
  );
  let att1 = Math.floor(
    ((2 * dataAPI.stats[1].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let attS1 = Math.floor(
    ((2 * dataAPI.stats[3].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let def1 = Math.floor(
    ((2 * dataAPI.stats[2].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let defS1 = Math.floor(
    ((2 * dataAPI.stats[4].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let vit1 = Math.floor(
    ((2 * dataAPI.stats[5].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );

  if (natureVS === "bold") {
    att1 = Math.floor(att1 - (att1 / 100) * 10);
    def1 = Math.floor(def1 + (def1 / 100) * 10);
  } else if (natureVS === "brave") {
    att1 = Math.floor(att1 + (att1 / 100) * 10);
    vit1 = Math.floor(vit1 - (vit1 / 100) * 10);
  } else if (natureVS === "calm") {
    att1 = Math.floor(att1 - (att1 / 100) * 10);
    defS1 = Math.floor(defS1 + (defS1 / 100) * 10);
  } else if (natureVS === "quiet") {
    attS1 = Math.floor(attS1 + (attS1 / 100) * 10);
    vit1 = Math.floor(vit1 - (vit1 / 100) * 10);
  } else if (natureVS === "mild") {
    attS1 = Math.floor(attS1 + (attS1 / 100) * 10);
    def1 = Math.floor(def1 - (def1 / 100) * 10);
  } else if (natureVS === "rash") {
    attS1 = Math.floor(attS1 + (attS1 / 100) * 10);
    defS1 = Math.floor(defS1 - (defS1 / 100) * 10);
  } else if (natureVS === "gentle") {
    def1 = Math.floor(def1 - (def1 / 100) * 10);
    defS1 = Math.floor(defS1 + (defS1 / 100) * 10);
  } else if (natureVS === "jolly") {
    attS1 = Math.floor(attS1 - (attS1 / 100) * 10);
    vit1 = Math.floor(vit1 + (vit1 / 100) * 10);
  } else if (natureVS === "lax") {
    def1 = Math.floor(def1 + (def1 / 100) * 10);
    defS1 = Math.floor(defS1 - (defS1 / 100) * 10);
  } else if (natureVS === "impish") {
    attS1 = Math.floor(attS1 - (attS1 / 100) * 10);
    def1 = Math.floor(def1 + (def1 / 100) * 10);
  } else if (natureVS === "sassy") {
    defS1 = Math.floor(defS1 + (defS1 / 100) * 10);
    vit1 = Math.floor(vit1 - (vit1 / 100) * 10);
  } else if (natureVS === "naughty") {
    att1 = Math.floor(att1 + (att1 / 100) * 10);
    defS1 = Math.floor(defS1 - (defS1 / 100) * 10);
  } else if (natureVS === "modest") {
    att1 = Math.floor(att1 - (att1 / 100) * 10);
    attS1 = Math.floor(attS1 + (attS1 / 100) * 10);
  } else if (natureVS === "naive") {
    defS1 = Math.floor(defS1 - (defS1 / 100) * 10);
    vit1 = Math.floor(vit1 + (vit1 / 100) * 10);
  } else if (natureVS === "hasty") {
    def1 = Math.floor(def1 - (def1 / 100) * 10);
    vit1 = Math.floor(vit1 + (vit1 / 100) * 10);
  } else if (natureVS === "careful") {
    attS1 = Math.floor(attS1 - (attS1 / 100) * 10);
    defS1 = Math.floor(defS1 + (defS1 / 100) * 10);
  } else if (natureVS === "relaxed") {
    def1 = Math.floor(def1 + (def1 / 100) * 10);
    vit1 = Math.floor(vit1 - (vit1 / 100) * 10);
  } else if (natureVS === "adamant") {
    att1 = Math.floor(att1 + (att1 / 100) * 10);
    attS1 = Math.floor(attS1 - (attS1 / 100) * 10);
  } else if (natureVS === "lonely") {
    att1 = Math.floor(att1 + (att1 / 100) * 10);
    def1 = Math.floor(def1 - (def1 / 100) * 10);
  } else if (natureVS === "timid") {
    att1 = Math.floor(att1 - (att1 / 100) * 10);
    vit1 = Math.floor(vit1 + (vit1 / 100) * 10);
  }

  //Mon pokemon
  const nombreType = dataAPI2.types.length;
  const type1 = dataAPI2.types[0].type.name;
  let type2 = "neutre";
  if (nombreType === 2) {
    type2 = dataAPI2.types[1].type.name;
  }
  let pvMax2 = Math.floor(
    ((2 * dataAPI2.stats[0].base_stat + 31 + 255 / 4) * 100) / 100 + 110
  );
  let pv2 = Math.floor(
    ((2 * dataAPI2.stats[0].base_stat + 31 + 255 / 4) * 100) / 100 + 110
  );
  let att2 = Math.floor(
    ((2 * dataAPI2.stats[1].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let attS2 = Math.floor(
    ((2 * dataAPI2.stats[3].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let def2 = Math.floor(
    ((2 * dataAPI2.stats[2].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let defS2 = Math.floor(
    ((2 * dataAPI2.stats[4].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );
  let vit2 = Math.floor(
    ((2 * dataAPI2.stats[5].base_stat + 31 + 255 / 4) * 100) / 100 + 5
  );

  if (nature === "bold") {
    att2 = Math.floor(att2 - (att2 / 100) * 10);
    def2 = Math.floor(def2 + (def2 / 100) * 10);
  } else if (nature === "brave") {
    att2 = Math.floor(att2 + (att2 / 100) * 10);
    vit2 = Math.floor(vit2 - (vit2 / 100) * 10);
  } else if (nature === "calm") {
    att2 = Math.floor(att2 - (att2 / 100) * 10);
    defS2 = Math.floor(defS2 + (defS2 / 100) * 10);
  } else if (nature === "quiet") {
    attS2 = Math.floor(attS2 + (attS2 / 100) * 10);
    vit2 = Math.floor(vit2 - (vit2 / 100) * 10);
  } else if (nature === "mild") {
    attS2 = Math.floor(attS2 + (attS2 / 100) * 10);
    def2 = Math.floor(def2 - (def2 / 100) * 10);
  } else if (nature === "rash") {
    attS2 = Math.floor(attS2 + (attS2 / 100) * 10);
    defS2 = Math.floor(defS2 - (defS2 / 100) * 10);
  } else if (nature === "gentle") {
    def2 = Math.floor(def2 - (def2 / 100) * 10);
    defS2 = Math.floor(defS2 + (defS2 / 100) * 10);
  } else if (nature === "jolly") {
    attS2 = Math.floor(attS2 - (attS2 / 100) * 10);
    vit2 = Math.floor(vit2 + (vit2 / 100) * 10);
  } else if (nature === "lax") {
    def2 = Math.floor(def2 + (def2 / 100) * 10);
    defS2 = Math.floor(defS2 - (defS2 / 100) * 10);
  } else if (nature === "impish") {
    attS2 = Math.floor(attS2 - (attS2 / 100) * 10);
    def2 = Math.floor(def2 + (def2 / 100) * 10);
  } else if (nature === "sassy") {
    defS2 = Math.floor(defS2 + (defS2 / 100) * 10);
    vit2 = Math.floor(vit2 - (vit2 / 100) * 10);
  } else if (nature === "naughty") {
    att2 = Math.floor(att2 + (att2 / 100) * 10);
    defS2 = Math.floor(defS2 - (defS2 / 100) * 10);
  } else if (nature === "modest") {
    att2 = Math.floor(att2 - (att2 / 100) * 10);
    attS2 = Math.floor(attS2 + (attS2 / 100) * 10);
  } else if (nature === "naive") {
    defS2 = Math.floor(defS2 - (defS2 / 100) * 10);
    vit2 = Math.floor(vit2 + (vit2 / 100) * 10);
  } else if (nature === "hasty") {
    def2 = Math.floor(def2 - (def2 / 100) * 10);
    vit2 = Math.floor(vit2 + (vit2 / 100) * 10);
  } else if (nature === "careful") {
    attS2 = Math.floor(attS2 - (attS2 / 100) * 10);
    defS2 = Math.floor(defS2 + (defS2 / 100) * 10);
  } else if (nature === "relaxed") {
    def2 = Math.floor(def2 + (def2 / 100) * 10);
    vit2 = Math.floor(vit2 - (vit2 / 100) * 10);
  } else if (nature === "adamant") {
    att2 = Math.floor(att2 + (att2 / 100) * 10);
    attS2 = Math.floor(attS2 - (attS2 / 100) * 10);
  } else if (nature === "lonely") {
    att2 = Math.floor(att2 + (att2 / 100) * 10);
    def2 = Math.floor(def2 - (def2 / 100) * 10);
  } else if (nature === "timid") {
    att2 = Math.floor(att2 - (att2 / 100) * 10);
    vit2 = Math.floor(vit2 + (vit2 / 100) * 10);
  }

  res.render("index", {
    dataAPI,
    dataAPI2,
    attaque1,
    attaque2,
    attaque3,
    attaque4,
    pv2,
    pv1,
    pvMax1,
    pvMax2,
    att1,
    att2,
    def1,
    def2,
    attS1,
    attS2,
    defS1,
    defS2,
    vit1,
    vit2,
    attaque1VS,
    attaque2VS,
    attaque3VS,
    attaque4VS,
    type1VS,
    type2VS,
    type1,
    type2,
    nature,
    natureVS,
    nomPokemonFR,
    nomPokemonFRVS,
  });
});

module.exports = router;
