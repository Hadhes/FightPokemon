var express = require("express");
var router = express.Router();

var request = require("sync-request");

router.get("/", function (req, res, next) {
  let tabPokemon = [];

  for (i = 1; i < 387; i++) {
    tabPokemon.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${i}.png`
    );
  }

  res.render("choix1", {
    tabPokemon,
  });
});

router.get("/choix2", function (req, res, next) {
  let tabPokemon = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  for (i = 1; i < 387; i++) {
    tabPokemon.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${i}.png`
    );
  }

  res.render("choix2", {
    tabPokemon,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
  });
});

router.get("/choix3", function (req, res, next) {
  let tabPokemon = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  for (i = 1; i < 387; i++) {
    tabPokemon.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${i}.png`
    );
  }

  res.render("choix3", {
    tabPokemon,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
  });
});

router.get("/choix4", function (req, res, next) {
  let tabPokemon = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  for (i = 1; i < 387; i++) {
    tabPokemon.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${i}.png`
    );
  }

  res.render("choix4", {
    tabPokemon,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
    att31,
    att32,
    att33,
    att34,
    nat3,
  });
});

router.get("/choix5", function (req, res, next) {
  let tabPokemon = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  const num4 = Number(req.query.num4);
  const att41 = req.query.att41;
  const att42 = req.query.att42;
  const att43 = req.query.att43;
  const att44 = req.query.att44;
  const nat4 = req.query.nat4;

  for (i = 1; i < 387; i++) {
    tabPokemon.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${i}.png`
    );
  }

  res.render("choix5", {
    tabPokemon,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
    att31,
    att32,
    att33,
    att34,
    nat3,
    num4,
    att41,
    att42,
    att43,
    att44,
    nat4,
  });
});

router.get("/choix6", function (req, res, next) {
  let tabPokemon = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  const num4 = Number(req.query.num4);
  const att41 = req.query.att41;
  const att42 = req.query.att42;
  const att43 = req.query.att43;
  const att44 = req.query.att44;
  const nat4 = req.query.nat4;

  const num5 = Number(req.query.num5);
  const att51 = req.query.att51;
  const att52 = req.query.att52;
  const att53 = req.query.att53;
  const att54 = req.query.att54;
  const nat5 = req.query.nat5;

  for (i = 1; i < 387; i++) {
    tabPokemon.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${i}.png`
    );
  }

  res.render("choix6", {
    tabPokemon,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
    att31,
    att32,
    att33,
    att34,
    nat3,
    num4,
    att41,
    att42,
    att43,
    att44,
    nat4,
    num5,
    att51,
    att52,
    att53,
    att54,
    nat5,
  });
});

router.get("/attaque1", function (req, res, next) {
  const tabAttaques = [];
  const num1 = Number(req.query.num1);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${num1}`);
  const dataPokemon = JSON.parse(data.body);

  for (let i = 0; i < dataPokemon.moves.length; i++) {
    tabAttaques.push(dataPokemon.moves[i].move.name);
  }

  res.render("attaque1", {
    tabAttaques,
    num1,
  });
});

router.get("/attaque2", function (req, res, next) {
  const tabAttaques = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${num2}`);
  const dataPokemon = JSON.parse(data.body);

  for (let i = 0; i < dataPokemon.moves.length; i++) {
    tabAttaques.push(dataPokemon.moves[i].move.name);
  }

  res.render("attaque2", {
    tabAttaques,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
  });
});

router.get("/attaque3", function (req, res, next) {
  const tabAttaques = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${num3}`);
  const dataPokemon = JSON.parse(data.body);

  for (let i = 0; i < dataPokemon.moves.length; i++) {
    tabAttaques.push(dataPokemon.moves[i].move.name);
  }

  res.render("attaque3", {
    tabAttaques,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
  });
});

router.get("/attaque4", function (req, res, next) {
  const tabAttaques = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  const num4 = Number(req.query.num4);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${num4}`);
  const dataPokemon = JSON.parse(data.body);

  for (let i = 0; i < dataPokemon.moves.length; i++) {
    tabAttaques.push(dataPokemon.moves[i].move.name);
  }

  res.render("attaque4", {
    tabAttaques,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
    att31,
    att32,
    att33,
    att34,
    nat3,
    num4,
  });
});

router.get("/attaque5", function (req, res, next) {
  const tabAttaques = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  const num4 = Number(req.query.num4);
  const att41 = req.query.att41;
  const att42 = req.query.att42;
  const att43 = req.query.att43;
  const att44 = req.query.att44;
  const nat4 = req.query.nat4;

  const num5 = Number(req.query.num5);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${num5}`);
  const dataPokemon = JSON.parse(data.body);

  for (let i = 0; i < dataPokemon.moves.length; i++) {
    tabAttaques.push(dataPokemon.moves[i].move.name);
  }

  res.render("attaque5", {
    tabAttaques,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
    att31,
    att32,
    att33,
    att34,
    nat3,
    num4,
    att41,
    att42,
    att43,
    att44,
    nat4,
    num5,
  });
});

router.get("/attaque6", function (req, res, next) {
  const tabAttaques = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  const num4 = Number(req.query.num4);
  const att41 = req.query.att41;
  const att42 = req.query.att42;
  const att43 = req.query.att43;
  const att44 = req.query.att44;
  const nat4 = req.query.nat4;

  const num5 = Number(req.query.num5);
  const att51 = req.query.att51;
  const att52 = req.query.att52;
  const att53 = req.query.att53;
  const att54 = req.query.att54;
  const nat5 = req.query.nat5;

  const num6 = Number(req.query.num6);
  const data = request("GET", `https://pokeapi.co/api/v2/pokemon/${num6}`);
  const dataPokemon = JSON.parse(data.body);

  for (let i = 0; i < dataPokemon.moves.length; i++) {
    tabAttaques.push(dataPokemon.moves[i].move.name);
  }

  res.render("attaque6", {
    tabAttaques,
    num1,
    att11,
    att12,
    att13,
    att14,
    nat1,
    num2,
    att21,
    att22,
    att23,
    att24,
    nat2,
    num3,
    att31,
    att32,
    att33,
    att34,
    nat3,
    num4,
    att41,
    att42,
    att43,
    att44,
    nat4,
    num5,
    att51,
    att52,
    att53,
    att54,
    nat5,
    num6,
  });
});

router.get("/combat", function (req, res, next) {
  let tabPokemons = [];

  const num1 = Number(req.query.num1);
  const att11 = req.query.att11;
  const att12 = req.query.att12;
  const att13 = req.query.att13;
  const att14 = req.query.att14;
  const nat1 = req.query.nat1;

  const num2 = Number(req.query.num2);
  const att21 = req.query.att21;
  const att22 = req.query.att22;
  const att23 = req.query.att23;
  const att24 = req.query.att24;
  const nat2 = req.query.nat2;

  const num3 = Number(req.query.num3);
  const att31 = req.query.att31;
  const att32 = req.query.att32;
  const att33 = req.query.att33;
  const att34 = req.query.att34;
  const nat3 = req.query.nat3;

  const num4 = Number(req.query.num4);
  const att41 = req.query.att41;
  const att42 = req.query.att42;
  const att43 = req.query.att43;
  const att44 = req.query.att44;
  const nat4 = req.query.nat4;

  const num5 = Number(req.query.num5);
  const att51 = req.query.att51;
  const att52 = req.query.att52;
  const att53 = req.query.att53;
  const att54 = req.query.att54;
  const nat5 = req.query.nat5;

  const num6 = Number(req.query.num6);
  const att61 = req.query.att61;
  const att62 = req.query.att62;
  const att63 = req.query.att63;
  const att64 = req.query.att64;
  const nat6 = req.query.nat6;

  let tabFinal = [
    {
      num: num1,
      att1: att11,
      att2: att12,
      att3: att13,
      att4: att14,
      nat: nat1,
    },
    {
      num: num2,
      att1: att21,
      att2: att22,
      att3: att23,
      att4: att24,
      nat: nat2,
    },
    {
      num: num3,
      att1: att31,
      att2: att32,
      att3: att33,
      att4: att34,
      nat: nat3,
    },
    {
      num: num4,
      att1: att41,
      att2: att42,
      att3: att43,
      att4: att44,
      nat: nat4,
    },
    {
      num: num5,
      att1: att51,
      att2: att52,
      att3: att53,
      att4: att54,
      nat: nat5,
    },
    {
      num: num6,
      att1: att61,
      att2: att62,
      att3: att63,
      att4: att64,
      nat: nat6,
    },
  ];

  for (let i = 0; i < 6; i++) {
    console.log(tabFinal[i]);
    //Recherche du pokemon
    let data1 = request(
      "GET",
      `https://pokeapi.co/api/v2/pokemon/${tabFinal[i].num}`
    );
    let dataPokemon = JSON.parse(data1.body);

    //Nom Français du Pokemon
    let data2 = request(
      "GET",
      `https://pokeapi.co/api/v2/pokemon-species/${dataPokemon.name}`
    );
    let nomPokemonData = JSON.parse(data2.body);
    let nomPokemonFR = nomPokemonData.names[4].name;

    //Nature Pokemon
    let data3 = request(
      "GET",
      `https://pokeapi.co/api/v2/nature/${tabFinal[i].nat}`
    );
    let natureData = JSON.parse(data3.body);
    let nature = natureData.name;

    // Attaque Pokemon
    let data4 = request(
      "GET",
      `https://pokeapi.co/api/v2/move/${tabFinal[i].att1}`
    );
    let attaque1 = JSON.parse(data4.body);

    let data5 = request(
      "GET",
      `https://pokeapi.co/api/v2/move/${tabFinal[i].att2}`
    );
    let attaque2 = JSON.parse(data5.body);

    let data6 = request(
      "GET",
      `https://pokeapi.co/api/v2/move/${tabFinal[i].att3}`
    );
    let attaque3 = JSON.parse(data6.body);

    let data7 = request(
      "GET",
      `https://pokeapi.co/api/v2/move/${tabFinal[i].att4}`
    );
    let attaque4 = JSON.parse(data7.body);

    //Types pokemon
    let nombreType = dataPokemon.types.length;
    let type1 = dataPokemon.types[0].type.name;
    let type2 = "neutre";
    if (nombreType === 2) {
      type2 = dataPokemon.types[1].type.name;
    }

    //Statistiques pokemon
    let pv = Math.floor(
      ((2 * dataPokemon.stats[0].base_stat + 31 + 255 / 4) * 100) / 100 + 110
    );
    let att = Math.floor(
      ((2 * dataPokemon.stats[1].base_stat + 31 + 255 / 4) * 100) / 100 + 5
    );
    let attS = Math.floor(
      ((2 * dataPokemon.stats[3].base_stat + 31 + 255 / 4) * 100) / 100 + 5
    );
    let def = Math.floor(
      ((2 * dataPokemon.stats[2].base_stat + 31 + 255 / 4) * 100) / 100 + 5
    );
    let defS = Math.floor(
      ((2 * dataPokemon.stats[4].base_stat + 31 + 255 / 4) * 100) / 100 + 5
    );
    let vit = Math.floor(
      ((2 * dataPokemon.stats[5].base_stat + 31 + 255 / 4) * 100) / 100 + 5
    );

    if (nature === "bold") {
      att = Math.floor(att - (att / 100) * 10);
      def = Math.floor(def + (def / 100) * 10);
    } else if (nature === "brave") {
      att = Math.floor(att + (att / 100) * 10);
      vit = Math.floor(vit - (vit / 100) * 10);
    } else if (nature === "calm") {
      att = Math.floor(att - (att / 100) * 10);
      defS = Math.floor(defS + (defS / 100) * 10);
    } else if (nature === "quiet") {
      attS = Math.floor(attS + (attS / 100) * 10);
      vit = Math.floor(vit - (vit / 100) * 10);
    } else if (nature === "mild") {
      attS = Math.floor(attS + (attS / 100) * 10);
      def = Math.floor(def - (def / 100) * 10);
    } else if (nature === "rash") {
      attS = Math.floor(attS + (attS / 100) * 10);
      defS = Math.floor(defS - (defS / 100) * 10);
    } else if (nature === "gentle") {
      def = Math.floor(def - (def / 100) * 10);
      defS = Math.floor(defS + (defS / 100) * 10);
    } else if (nature === "jolly") {
      attS = Math.floor(attS - (attS / 100) * 10);
      vit = Math.floor(vit + (vit / 100) * 10);
    } else if (nature === "lax") {
      def = Math.floor(def + (def / 100) * 10);
      defS = Math.floor(defS - (defS / 100) * 10);
    } else if (nature === "impish") {
      attS = Math.floor(attS - (attS / 100) * 10);
      def = Math.floor(def + (def / 100) * 10);
    } else if (nature === "sassy") {
      defS = Math.floor(defS + (defS / 100) * 10);
      vit = Math.floor(vit - (vit / 100) * 10);
    } else if (nature === "naughty") {
      att = Math.floor(att + (att / 100) * 10);
      defS = Math.floor(defS - (defS / 100) * 10);
    } else if (nature === "modest") {
      att = Math.floor(att - (att / 100) * 10);
      attS = Math.floor(attS + (attS / 100) * 10);
    } else if (nature === "naive") {
      defS = Math.floor(defS - (defS / 100) * 10);
      vit = Math.floor(vit + (vit / 100) * 10);
    } else if (nature === "hasty") {
      def = Math.floor(def - (def / 100) * 10);
      vit = Math.floor(vit + (vit / 100) * 10);
    } else if (nature === "careful") {
      attS = Math.floor(attS - (attS / 100) * 10);
      defS = Math.floor(defS + (defS / 100) * 10);
    } else if (nature === "relaxed") {
      def = Math.floor(def + (def / 100) * 10);
      vit = Math.floor(vit - (vit / 100) * 10);
    } else if (nature === "adamant") {
      att = Math.floor(att + (att / 100) * 10);
      attS = Math.floor(attS - (attS / 100) * 10);
    } else if (nature === "lonely") {
      att = Math.floor(att + (att / 100) * 10);
      def = Math.floor(def - (def / 100) * 10);
    } else if (nature === "timid") {
      att = Math.floor(att - (att / 100) * 10);
      vit = Math.floor(vit + (vit / 100) * 10);
    }

    let pokemon = {
      nom: nomPokemonFR,
      nature: nature,
      attaque1: {
        nom: attaque1.names[3].name,
        puissance: attaque1.power,
        type: attaque1.type.name,
        classe: attaque1.damage_class.name,
      },
      attaque2: {
        nom: attaque2.names[3].name,
        puissance: attaque2.power,
        type: attaque2.type.name,
        classe: attaque2.damage_class.name,
      },
      attaque3: {
        nom: attaque3.names[3].name,
        puissance: attaque3.power,
        type: attaque3.type.name,
        classe: attaque3.damage_class.name,
      },
      attaque4: {
        nom: attaque4.names[3].name,
        puissance: attaque4.power,
        type: attaque4.type.name,
        classe: attaque4.damage_class.name,
      },
      type1: type1,
      type2: type2,
      stats: {
        pv: pv,
        att: att,
        def: def,
        attS: attS,
        defS: defS,
        vit: vit,
      },
      sprite: dataPokemon.sprites.back_default,
    };
    tabPokemons.push(pokemon);
  }

  let tabPokemonsVS = [];
  for (let j = 1; j < 7; j++) {
    // Recherche pokemon adverse
    let number = Math.floor(Math.random() * 387);
    if (number === 0) {
      number = 1;
    }
    let data1 = request("GET", `https://pokeapi.co/api/v2/pokemon/${number}`);
    let dataAPI = JSON.parse(data1.body);

    // Nom Fr pokemon adverse
    let data2 = request(
      "GET",
      `https://pokeapi.co/api/v2/pokemon-species/${dataAPI.name}`
    );
    let nomPokemonVSData = JSON.parse(data2.body);
    let nomPokemonFRVS = nomPokemonVSData.names[4].name;

    // Nature Pokemon adverse
    let number4 = Math.floor(Math.random() * 26);
    if (number4 === 0) {
      number4 = 1;
    }
    let data3 = request("GET", `https://pokeapi.co/api/v2/nature/${number4}`);
    let natureVSData = JSON.parse(data3.body);
    let natureVS = natureVSData.name;

    // Attaque Pokemon adverse
    let nameAtt1VS = dataAPI.moves[0].move.name;
    let data4 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt1VS}`);
    let attaque1VS = JSON.parse(data4.body);

    let nameAtt2VS = dataAPI.moves[1].move.name;
    let data5 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt2VS}`);
    let attaque2VS = JSON.parse(data5.body);

    let nameAtt3VS = dataAPI.moves[2].move.name;
    let data6 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt3VS}`);
    let attaque3VS = JSON.parse(data6.body);

    let nameAtt4VS = dataAPI.moves[3].move.name;
    let data7 = request("GET", `https://pokeapi.co/api/v2/move/${nameAtt4VS}`);
    let attaque4VS = JSON.parse(data7.body);

    //Type pokemon adverse
    let nombreTypeVS = dataAPI.types.length;
    let type1VS = dataAPI.types[0].type.name;
    let type2VS = "neutre";
    if (nombreTypeVS === 2) {
      type2VS = dataAPI.types[1].type.name;
    }

    //Statistiques pokemon adverse
    let pv1 = Math.floor(
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

    let pokemonVS = {
      nom: nomPokemonFRVS,
      nature: natureVS,
      type1: type1VS,
      type2: type2VS,
      attaque1: {
        nom: attaque1VS.names[3].name,
        puissance: attaque1VS.power,
        type: attaque1VS.type.name,
        classe: attaque1VS.damage_class.name,
      },
      attaque2: {
        nom: attaque2VS.names[3].name,
        puissance: attaque2VS.power,
        type: attaque2VS.type.name,
        classe: attaque2VS.damage_class.name,
      },
      attaque3: {
        nom: attaque3VS.names[3].name,
        puissance: attaque3VS.power,
        type: attaque3VS.type.name,
        classe: attaque3VS.damage_class.name,
      },
      attaque4: {
        nom: attaque4VS.names[3].name,
        puissance: attaque4VS.power,
        type: attaque4VS.type.name,
        classe: attaque4VS.damage_class.name,
      },
      stats: {
        pv: pv1,
        att: att1,
        def: def1,
        attS: attS1,
        defS: defS1,
        vit: vit1,
      },
      sprite: dataAPI.sprites.front_default,
    };
    tabPokemonsVS.push(pokemonVS);
  }

  res.render("combat", {
    pokemons: tabPokemons,
    pokemonsVS: tabPokemonsVS,
  });
});

module.exports = router;
