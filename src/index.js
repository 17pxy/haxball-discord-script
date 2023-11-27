const {
  MessageEmbed,
  Client,
  Collection,
} = require("discord.js");
const client = new Client({
  intents: 32767,
});

module.exports = client;

const yaml = require("js-yaml");
const fs = require("fs");
const express = require("express");
const haxball = require("haxball.js");

const statsDB = require("./Models/stats.js");
const syncModel = require("./Models/syncModel.js");
const poderesDB = require("./Models/poderes.js");

const config = yaml.load(fs.readFileSync("settings/config.yml", "utf8", 2));

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = yaml.load(fs.readFileSync("settings/config.yml", "utf8", 2));

require("./handler")(client);
require("events").EventEmitter.defaultMaxListeners = 0;

process.on("unhandledRejection", (error) => {
  console.error(error);
});

client.on("shardError", (error) => {
  console.error(error);
});

var futsalx3 = `{"name":"Futsal x3","width":615,"height":270,"bg":{"color":"2C4C33"},"vertexes":[{"x":-550,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":-585,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":-585,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":-550,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":550,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":585,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":585,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":550,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"]},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"]},{"x":-550,"y":240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"]},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"]},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":-556.5,"y":80,"cMask":["ball"]},{"x":-556.5,"y":240,"cMask":["ball"]},{"x":-556.5,"y":-240,"cMask":["ball"]},{"x":-556.5,"y":-80,"cMask":["ball"]},{"x":556.5,"y":-240,"cMask":["ball"]},{"x":556.5,"y":-80,"cMask":["ball"]},{"x":556.5,"y":80,"cMask":["ball"]},{"x":556.5,"y":240,"cMask":["ball"]},{"x":-550,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":-550,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":550,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":550,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":-550,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":-585,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":-585,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":-550,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":550,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":585,"y":-80,"bCoef":0.3,"cMask":["ball"]},{"x":585,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":550,"y":80,"bCoef":0.3,"cMask":["ball"]},{"x":-556.5,"y":80,"cMask":["ball"]},{"x":-556.5,"y":240,"cMask":["ball"]},{"x":-556.5,"y":-240,"cMask":["ball"]},{"x":-556.5,"y":-80,"cMask":["ball"]},{"x":556.5,"y":-240,"cMask":["ball"]},{"x":556.5,"y":-80,"cMask":["ball"]},{"x":556.5,"y":80,"cMask":["ball"]},{"x":556.5,"y":240,"cMask":["ball"]},{"x":-585,"y":-270,"bCoef":0.5,"cMask":["ball"]},{"x":-585,"y":270,"bCoef":0.5,"cMask":["ball"]},{"x":585,"y":270,"bCoef":0.5,"cMask":["ball"]},{"x":585,"y":-270,"bCoef":0.5,"cMask":["ball"]},{"x":548.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-232,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-232,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-112,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-112,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-128,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-128,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":8,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":8,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-8,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-8,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":112,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":112,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":128,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":128,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":232,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":232,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":120,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":120,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":0,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":0,"bCoef":0.1,"cMask":["wall"]},{"x":548.5,"y":-120,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":-120,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-270,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":240,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"cMask":[]},{"x":0,"y":80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-550,"y":95,"bCoef":0.1,"cMask":["wall"]},{"x":-500,"y":95,"bCoef":0.1,"cMask":["wall"]},{"x":-500,"y":-95,"bCoef":0.1,"cMask":["wall"]},{"x":-550,"y":-95,"bCoef":0.1,"cMask":["wall"]},{"x":-550,"y":-185,"bCoef":0.1,"cMask":["wall"]},{"x":-350,"y":-185,"bCoef":0.1,"cMask":["wall"]},{"x":-350,"y":185,"bCoef":0.1,"cMask":["wall"]},{"x":-548.5,"y":185,"bCoef":0.1,"cMask":["wall"]},{"x":-350,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":-350,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":550,"y":95,"bCoef":0.1,"cMask":["wall"]},{"x":500,"y":95,"bCoef":0.1,"cMask":["wall"]},{"x":500,"y":-95,"bCoef":0.1,"cMask":["wall"]},{"x":550,"y":-95,"bCoef":0.1,"cMask":["wall"]},{"x":550,"y":-185,"bCoef":0.1,"cMask":["wall"]},{"x":350,"y":-185,"bCoef":0.1,"cMask":["wall"]},{"x":350,"y":185,"bCoef":0.1,"cMask":["wall"]},{"x":550,"y":185,"bCoef":0.1,"cMask":["wall"]},{"x":350,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":350,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":-550,"y":-225,"bCoef":0.1,"cMask":["wall"]},{"x":-535,"y":-240,"bCoef":0.1,"cMask":["wall"]},{"x":-425,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-425,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-425,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-425,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":425,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":425,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":425,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":425,"y":1.5,"bCoef":0.1,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":6,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":10,"v1":11,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":12,"v1":13,"cMask":["ball"],"color":"C5F0C9"},{"v0":14,"v1":15,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":18,"v1":19,"cMask":["ball"],"color":"C5F0C9"},{"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":32,"v1":33,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":33,"v1":34,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":37,"v1":38,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":38,"v1":39,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":48,"v1":49,"bCoef":0.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":50,"v1":51,"bCoef":0.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":57,"v1":58,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":59,"v1":60,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":61,"v1":62,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":63,"v1":64,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":67,"v1":68,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":69,"v1":70,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":71,"v1":72,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":73,"v1":74,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":75,"v1":76,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":77,"v1":78,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":79,"v1":80,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":81,"v1":82,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":83,"v1":84,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":85,"v1":86,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":87,"v1":88,"bCoef":0.1,"cMask":["wall"],"color":"3C6746"},{"v0":89,"v1":90,"bCoef":0.1,"cMask":["wall"],"color":"34563C"},{"v0":91,"v1":92,"bCoef":0.1,"cMask":["wall"],"color":"34563C"},{"v0":93,"v1":94,"bCoef":0.1,"cMask":["wall"],"color":"34563C"},{"v0":95,"v1":96,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":97,"v1":98,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":99,"v1":100,"bCoef":0.1,"curve":179.42829117403488,"curveF":0.0049891420830909,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"C5F0C9"},{"v0":102,"v1":101,"bCoef":0.1,"curve":180,"curveF":6.1232339957368e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"C5F0C9"},{"v0":108,"v1":107,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":109,"v1":110,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":114,"v1":113,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C5F0C9"},{"v0":115,"v1":116,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C5F0C9"},{"v0":113,"v1":115,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":117,"v1":118,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":119,"v1":118,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":120,"v1":119,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":121,"v1":122,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":123,"v1":122,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":124,"v1":123,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":125,"v1":126,"bCoef":0.1,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"C5F0C9"},{"v0":127,"v1":128,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":129,"v1":128,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":130,"v1":129,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":131,"v1":132,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":133,"v1":132,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":134,"v1":133,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":136,"v1":135,"bCoef":0.1,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"C5F0C9"},{"v0":138,"v1":137,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":139,"v1":140,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":142,"v1":141,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":143,"v1":144,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":146,"v1":145,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":147,"v1":148,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":150,"v1":149,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"}],"planes":[{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[-1,0],"dist":-615,"bCoef":0.1},{"normal":[0,-1],"dist":-240,"cMask":["ball"]},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-615,"bCoef":0.1},{"normal":[0,1],"dist":-240,"cMask":["ball"]}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"cGroup":["ball","kick","score"]},{"pos":[-765.1,0],"radius":0.01,"bCoef":440,"invMass":0,"color":"0"},{"pos":[765.1,0],"radius":0.1,"bCoef":440,"invMass":0,"color":"0"},{"pos":[-550,-80],"radius":4.5,"invMass":0},{"pos":[-550,-240],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[-585,-80],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[-550,80],"radius":4.5,"invMass":0},{"pos":[-585,80],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[-550,240],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[550,240],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[550,-240],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[550,-80],"radius":4.5,"invMass":0},{"pos":[585,-80],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[550,80],"radius":4.5,"invMass":0},{"pos":[585,80],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0"}`;
var futsalx5 = `{"name":"Futsal x5","width":1020,"height":510,"bg":{"color":"2B591C"},"vertexes":[{"x":-950,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-990,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-990,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-950,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":950,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":990,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":990,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":950,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-950,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":-950,"y":460,"bCoef":1.15,"cMask":["ball"]},{"x":-950,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-950,"y":-460,"bCoef":1.15,"cMask":["ball"]},{"x":-950,"y":460,"cMask":["ball"]},{"x":950,"y":460,"cMask":["ball"]},{"x":950,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":950,"y":460,"bCoef":1.15,"cMask":["ball"]},{"x":950,"y":-460,"bCoef":1.15,"cMask":["ball"]},{"x":950,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-950,"y":-460,"cMask":["ball"]},{"x":950,"y":-460,"cMask":["ball"]},{"x":-956.5,"y":90,"cMask":["ball"]},{"x":-956.5,"y":460,"cMask":["ball"]},{"x":-956.5,"y":-460,"cMask":["ball"]},{"x":-956.5,"y":-90,"cMask":["ball"]},{"x":956.5,"y":-460,"cMask":["ball"]},{"x":956.5,"y":-90,"cMask":["ball"]},{"x":956.5,"y":90,"cMask":["ball"]},{"x":956.5,"y":460,"cMask":["ball"]},{"x":-950,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-990,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-990,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-950,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":950,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":990,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":990,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":950,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-956.5,"y":90,"cMask":["ball"]},{"x":-956.5,"y":460,"cMask":["ball"]},{"x":-956.5,"y":-460,"cMask":["ball"]},{"x":-956.5,"y":-90,"cMask":["ball"]},{"x":956.5,"y":-460,"cMask":["ball"]},{"x":956.5,"y":-90,"cMask":["ball"]},{"x":956.5,"y":90,"cMask":["ball"]},{"x":956.5,"y":460,"cMask":["ball"]},{"x":-990,"y":-460,"bCoef":0.5,"cMask":["ball"]},{"x":-990,"y":460,"bCoef":0.5,"cMask":["ball"]},{"x":990,"y":460,"bCoef":0.5,"cMask":["ball"]},{"x":990,"y":-460,"bCoef":0.5,"cMask":["ball"]},{"x":948.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":-430,"bCoef":0.1,"cMask":["wall"]},{"x":-920,"y":-460,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":160,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":160,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":180,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":180,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":330,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":330,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-160,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-160,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-180,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-180,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-330,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-330,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-350,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-350,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-332,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-332,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-348,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-348,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-162,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-162,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-178,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-178,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":8,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":8,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-8,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-8,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":162,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":162,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":178,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":178,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":350,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":350,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":332,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":332,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":348,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":348,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":340,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":340,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":170,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":170,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":0,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":0,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-170,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-170,"bCoef":0.1,"cMask":["wall"]},{"x":948.5,"y":-340,"bCoef":0.1,"cMask":["wall"]},{"x":-948.5,"y":-340,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-510,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-460,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":460,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":510,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-460,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"cMask":[]},{"x":0,"y":150,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":460,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-150,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-460,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":460,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":-850,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":-850,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":-300,"bCoef":0.1,"cMask":["wall"]},{"x":-600,"y":-300,"bCoef":0.1,"cMask":["wall"]},{"x":-600,"y":300,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":300,"bCoef":0.1,"cMask":["wall"]},{"x":-600,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":-600,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":850,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":850,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":-300,"bCoef":0.1,"cMask":["wall"]},{"x":600,"y":-300,"bCoef":0.1,"cMask":["wall"]},{"x":600,"y":300,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":300,"bCoef":0.1,"cMask":["wall"]},{"x":-725,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-725,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-725,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-725,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":725,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":725,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":725,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":725,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":600,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":600,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":-430,"bCoef":0.1,"cMask":["wall"]},{"x":920,"y":-460,"bCoef":0.1,"cMask":["wall"]},{"x":950,"y":430,"bCoef":0.1,"cMask":["wall"]},{"x":920,"y":460,"bCoef":0.1,"cMask":["wall"]},{"x":-950,"y":430,"bCoef":0.1,"cMask":["wall"]},{"x":-920,"y":460,"bCoef":0.1,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":6,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":10,"v1":11,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":12,"v1":13,"cMask":["ball"],"color":"C5F0C9"},{"v0":14,"v1":15,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":18,"v1":19,"cMask":["ball"],"color":"C5F0C9"},{"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":32,"v1":33,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":33,"v1":34,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":37,"v1":38,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":38,"v1":39,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":48,"v1":49,"bCoef":0.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":50,"v1":51,"bCoef":0.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":57,"v1":56,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":58,"v1":59,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":60,"v1":61,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":62,"v1":63,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":64,"v1":65,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":66,"v1":67,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":68,"v1":69,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":70,"v1":71,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":72,"v1":73,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":74,"v1":75,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":76,"v1":77,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":78,"v1":79,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":80,"v1":81,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":82,"v1":83,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":84,"v1":85,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":86,"v1":87,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":88,"v1":89,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":90,"v1":91,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":92,"v1":93,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":94,"v1":95,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":96,"v1":97,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":98,"v1":99,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":100,"v1":101,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":102,"v1":103,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":104,"v1":105,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":106,"v1":107,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":108,"v1":109,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":110,"v1":111,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":112,"v1":113,"bCoef":0.1,"curve":179.42829117403488,"curveF":0.0049891420830909,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"C5F0C9"},{"v0":115,"v1":114,"bCoef":0.1,"curve":180,"curveF":6.1232339957368e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"C5F0C9"},{"v0":121,"v1":120,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":122,"v1":123,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":127,"v1":126,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C5F0C9"},{"v0":128,"v1":129,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C5F0C9"},{"v0":126,"v1":128,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":130,"v1":131,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":133,"v1":132,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":134,"v1":135,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":136,"v1":135,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":137,"v1":136,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":138,"v1":139,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":140,"v1":139,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":141,"v1":140,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":142,"v1":143,"bCoef":0.1,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"C5F0C9"},{"v0":144,"v1":145,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":146,"v1":145,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":147,"v1":146,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":148,"v1":149,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":150,"v1":149,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":151,"v1":150,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":152,"v1":153,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":155,"v1":154,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":156,"v1":157,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":159,"v1":158,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":161,"v1":160,"bCoef":0.1,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"C5F0C9"},{"v0":162,"v1":163,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":165,"v1":164,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":166,"v1":167,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"}],"planes":[{"normal":[0,1],"dist":-510,"bCoef":0.1},{"normal":[-1,0],"dist":-1020,"bCoef":0.1},{"normal":[0,-1],"dist":-460,"cMask":["ball"]},{"normal":[0,-1],"dist":-510,"bCoef":0.1},{"normal":[1,0],"dist":-1020,"bCoef":0.1},{"normal":[0,1],"dist":-460,"cMask":["ball"]}],"goals":[{"p0":[-957.5,-90],"p1":[-957.5,90],"team":"red"},{"p0":[957.5,90],"p1":[957.5,-90],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"cGroup":["ball","kick","score"]},{"pos":[-950,90],"radius":4.5,"invMass":0},{"pos":[-950,-90],"radius":4.5,"invMass":0},{"pos":[950,90],"radius":4.5,"invMass":0},{"pos":[950,-90],"radius":4.5,"invMass":0},{"pos":[-950,-460],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[990,-90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[990,90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[-990,-90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[-990,90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[950,-460],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[950,460],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[-950,460],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":300}`;
var futsalx4 = `{"name":"Futsal x4","width":765,"height":350,"bg":{"color":"2B591C"},"vertexes":[{"x":-700,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-735,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-735,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":735,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":735,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":700,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"cMask":["ball"]},{"x":700,"y":320,"cMask":["ball"]},{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"cMask":["ball"]},{"x":700,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":90,"cMask":["ball"]},{"x":-706.5,"y":320,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-735,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":-735,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":735,"y":-90,"bCoef":0.3,"cMask":["ball"]},{"x":735,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":700,"y":90,"bCoef":0.3,"cMask":["ball"]},{"x":-706.5,"y":90,"cMask":["ball"]},{"x":-706.5,"y":320,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-735,"y":-350,"bCoef":0.5,"cMask":["ball"]},{"x":-735,"y":350,"bCoef":0.5,"cMask":["ball"]},{"x":735,"y":350,"bCoef":0.5,"cMask":["ball"]},{"x":735,"y":-350,"bCoef":0.5,"cMask":["ball"]},{"x":698.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-300,"bCoef":0.1,"cMask":["wall"]},{"x":-680,"y":-320,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":300,"bCoef":0.1,"cMask":["wall"]},{"x":-680,"y":320,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":10,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-10,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":130,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":250,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":250,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-130,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-250,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-250,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-300,"bCoef":0.1,"cMask":["wall"]},{"x":680,"y":-320,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":300,"bCoef":0.1,"cMask":["wall"]},{"x":680,"y":320,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-232,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-232,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-248,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-248,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-112,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-112,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-128,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-128,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":8,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":8,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-8,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-8,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":112,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":112,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":128,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":128,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":250,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":250,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":232,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":232,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":248,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":248,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":240,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":240,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":120,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":120,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":0,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":0,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-120,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-120,"bCoef":0.1,"cMask":["wall"]},{"x":698.5,"y":-240,"bCoef":0.1,"cMask":["wall"]},{"x":-698.5,"y":-240,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-350,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"cMask":[]},{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":0,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":-620,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":-620,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":-450,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":-450,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":-450,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":-450,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":620,"y":110,"bCoef":0.1,"cMask":["wall"]},{"x":620,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-110,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":450,"y":-230,"bCoef":0.1,"cMask":["wall"]},{"x":450,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":230,"bCoef":0.1,"cMask":["wall"]},{"x":450,"y":-80,"bCoef":0.1,"cMask":["wall"]},{"x":450,"y":80,"bCoef":0.1,"cMask":["wall"]},{"x":-535,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-535,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-535,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":-535,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":535,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":535,"y":1.5,"bCoef":0.1,"cMask":["wall"]},{"x":535,"y":-1.5,"bCoef":0.1,"cMask":["wall"]},{"x":535,"y":1.5,"bCoef":0.1,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":1,"v1":2,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":2,"v1":3,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":5,"v1":6,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.3,"cMask":["ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":10,"v1":11,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":12,"v1":13,"cMask":["ball"],"color":"C5F0C9"},{"v0":14,"v1":15,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"C5F0C9"},{"v0":18,"v1":19,"cMask":["ball"],"color":"C5F0C9"},{"v0":20,"v1":21,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":32,"v1":33,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":33,"v1":34,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":34,"v1":35,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":36,"v1":37,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":37,"v1":38,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":38,"v1":39,"bCoef":0.3,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":40,"v1":41,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":48,"v1":49,"bCoef":0.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":50,"v1":51,"bCoef":0.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":58,"v1":57,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":59,"v1":60,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":61,"v1":62,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":63,"v1":64,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":67,"v1":68,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":69,"v1":70,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":71,"v1":72,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":73,"v1":74,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":75,"v1":76,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":77,"v1":78,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":79,"v1":80,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":81,"v1":82,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":84,"v1":83,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"C5F0C9"},{"v0":85,"v1":86,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":87,"v1":88,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":89,"v1":90,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":91,"v1":92,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":93,"v1":94,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":95,"v1":96,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":97,"v1":98,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":99,"v1":100,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":101,"v1":102,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":103,"v1":104,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":105,"v1":106,"bCoef":0.1,"cMask":["wall"],"color":"377324"},{"v0":107,"v1":108,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":109,"v1":110,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":111,"v1":112,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":113,"v1":114,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":115,"v1":116,"bCoef":0.1,"cMask":["wall"],"color":"30631F"},{"v0":117,"v1":118,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":119,"v1":120,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":121,"v1":122,"bCoef":0.1,"curve":179.42829117403488,"curveF":0.0049891420830909,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"C5F0C9"},{"v0":124,"v1":123,"bCoef":0.1,"curve":180,"curveF":6.1232339957368e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"C5F0C9"},{"v0":130,"v1":129,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":131,"v1":132,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":136,"v1":135,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C5F0C9"},{"v0":137,"v1":138,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"C5F0C9"},{"v0":135,"v1":137,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":139,"v1":140,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":142,"v1":141,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":143,"v1":144,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":145,"v1":144,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":146,"v1":145,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":147,"v1":148,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":149,"v1":148,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":150,"v1":149,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":151,"v1":152,"bCoef":0.1,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"C5F0C9"},{"v0":153,"v1":154,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":155,"v1":154,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":156,"v1":155,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":157,"v1":158,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":159,"v1":158,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":160,"v1":159,"bCoef":0.1,"cMask":["wall"],"color":"C5F0C9"},{"v0":162,"v1":161,"bCoef":0.1,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"C5F0C9"},{"v0":163,"v1":164,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":166,"v1":165,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":167,"v1":168,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"},{"v0":170,"v1":169,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"C5F0C9"}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[-1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,1],"dist":-320,"cMask":["ball"]}],"goals":[{"p0":[-707.5,-90],"p1":[-707.5,90],"team":"red"},{"p0":[707.5,90],"p1":[707.5,-90],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"cGroup":["ball","kick","score"]},{"pos":[-765.1,0],"radius":0.01,"bCoef":440,"invMass":0,"color":"0"},{"pos":[765.1,0],"radius":0.1,"bCoef":440,"invMass":0,"color":"0"},{"pos":[-700,90],"radius":4.5,"invMass":0},{"pos":[-700,-90],"radius":4.5,"invMass":0},{"pos":[700,90],"radius":4.5,"invMass":0},{"pos":[700,-90],"radius":4.5,"invMass":0},{"pos":[-700,-320],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[700,-320],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[700,320],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[-700,320],"radius":3.5,"bCoef":1,"invMass":0,"color":"C5F0C9","cMask":["ball"]},{"pos":[735,-90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[735,90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[-735,-90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]},{"pos":[-735,90],"radius":3.5,"bCoef":1,"invMass":0,"cMask":["ball"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0"}`;

const app = express();
app.use(express.json());

var levels = []
var pointsLevel = 10;
var totalLevels = 50;

for (var i = 2; i <= totalLevels; i++) {
  levels.push({ level: i, points: pointsLevel * i });
}

haxball.then(async (HBInit) => {
  const geo = [
    { code: "ly", lat: -34.49999999999999, lon: -58.299999999999996 },
  ];

  const room = HBInit({
    roomName: config.HAXBALL.ROOM_NAME,
    maxPlayers: config.HAXBALL.MAX_USERS,
    public: config.HAXBALL.PUBLIC,
    noPlayer: config.HAXBALL.BOT_NO_PLAYER,
    token: config.HAXBALL.TOKEN,
    geo: geo[0],
  });

  let lastKickerId;
  let lastKickerName;
  let lastKickerTeam;
  let secondLastKickerId;
  let secondLastKickerName;
  let secondLastKickerTeam;
  let giveawayTime;
  let adivinaTime;
  let palabraSorteo;
  let adivinaPalabra;
  let scoresBlue = 0;
  let scoresRed = 0;
  let autoChoice = true;
  let chatLocked = false;
  let gkRed;
  let gkBlue;
  let players = room.getPlayerList();
  let playerNames = players.map((x) => x.name);
  let playerIDS = players.map((x) => x.id);
  var playersInfo = [];

  let playerDate = playerNames
    .map((nombre, i) => `${nombre}[${playerIDS[i]}]`)
    .join(", ");

  let reds = players.filter((x) => x.team == 1);
  let blues = players.filter((x) => x.team == 2);
  let spectators = players.filter((x) => x.team == 0);

  room.setCustomStadium(futsalx3);
  room.setScoreLimit(config.HAXBALL.SCORE_LIMIT);
  room.setTimeLimit(config.HAXBALL.TIME_LIMIT);
  room.setTeamsLock(true);

  client.on("messageCreate", async (message) => {
    playerNames = players.map((x) => x.name);
    playerIDS = players.map((x) => x.id);
    playerDate = playerNames
      .map((nombre, i) => `${nombre}[${playerIDS[i]}]`)
      .join(", ");

    if (message.content.startsWith("!")) {
      players = room.getPlayerList();
      const msg = message.content.substring(1);
      let args = msg.split(" ");

      if (args[0] == "jugadores") {
        const playersEmbed = new MessageEmbed()
          .setColor("GREEN")
          .setTitle(`${config.HAXBALL.ROOM_NAME}`)
          .setDescription(
            `Esta es la lista de jugadores en linea:\n\n${playerDate}`
          );
        message.reply({ embeds: [playersEmbed] });
      } else if (args[0] == "haxban") {
        if (!message.member.permissions.has("ADMINISTRATOR"))
          return message.reply("No tienes permisos para usar este comando!");

        const userID = args[1];
        if (!userID)
          return message.reply({
            content: "Tienes que poner la id del usuario!",
          });
        const banReason = args.slice(2).join(" ") || "No se proporciono razon";

        if (!playerNames.filter((x) => x == userID))
          return message.reply({ content: "Este usuario no esta jugando!" });

        room.kickPlayer(userID, banReason, true);

        const banEmbed = new MessageEmbed()
          .setColor("GREEN")
          .setTitle("Usuario Baneado")
          .setDescription(
            `Un usuario fue baneado correctamente del host ${config.HAXBALL.ROOM_NAME}`
          )
          .addFields(
            { name: `Usuario Baneado`, value: `${banName}` },
            { name: `ID`, value: `${userID}` },
            { name: `Razon`, value: `${banReason}` },
            { name: `Baneado por`, value: `${message.member}` }
          );

        message.reply({ embeds: [banEmbed] });
      } else if (args[0] == "anunciohax") {
        if (!message.member.permissions.has("ADMINISTRATOR"))
          return message.reply("No tienes permisos para usar este comando!");

        const mensaje = args.slice(1).join(" ");
        if (!mensaje)
          return message.reply({ content: "Tienes que poner un mensaje!" });

        room.sendAnnouncement(
          `[ANUNCIO] » ${mensaje}`,
          null,
          0x4dff15,
          "bold",
          1
        );
        message.reply({
          content: `El anuncio se envio correctamente (${mensaje})`,
        });
      } else if (args[0] == "clearbans") {
        if (!message.member.permissions.has("ADMINISTRATOR"))
          return message.reply("No tienes permisos para usar este comando!");
        room.clearBans();
        message.reply({ content: "Todos los bans fueron borrados!" });
      }
    }
  });

  room.onRoomLink = function (link) {
    console.log(link);
  };

  room.onPlayerJoin = async function (player) {
    room.sendAnnouncement(
      `━━━━━━━━━━━━━┛ ${client.config.HAXBALL.COMMUNITY_NAME} 🐸 Discord: ${client.config.HAXBALL.DISCORD} ┗━━━━━━━━━━━━━\n[👤] ¡Hola ${player.name}! Recuerda seguir las reglas para no ser sancionado\n[🔝] ¡Compite por ser el mejor en el host! Usa '!me' para ver tus estadisticas.\n[🛒] ¡Compra en la tienda! Puedes comprar size, chatcolor, prefix, vip, premium y mucho mas usando coins y el comando !tienda.\n[⚠️] ¡Llama a un administrador! ¿Hay un troll o alguien muy toxico? Usa el comando '!llamaradmin' junto al nick del usuario y será sancionado.\n━━━━━━━━━━━━━┓ ${client.config.HAXBALL.COMMUNITY_NAME} 🐸 Discord: ${client.config.HAXBALL.DISCORD} ┏━━━━━━━━━━━━━`,
      player.id,
      0x41fe3b,
      "small",
      1
    );
    const allBlacklisted = await statsDB.find({ isBlacklisted: true });

    if (allBlacklisted.some(x => x.auth === player.auth || x.conexion === player.conn)) {
      return room.kickPlayer(player.id, "Usuario blacklisteado", true);
    }

    const playerData = await statsDB.findOne({ auth: player.auth, name: player.name });
    const checkName = await statsDB.findOne({ name: player.name });

    if (checkName && checkName.auth !== player.auth) {
      return room.kickPlayer(player.id, "Este nick ya esta registrado en otra persona!", false);
    } else if (playerData?.isAdminOFI) {
      room.setPlayerAdmin(player.id, true);
    }


    if (!playerData && !checkName) {
      await statsDB.create({
        auth: player.auth,
        conexion: player.conn,
        name: player.name,
        id: player.id,
        isLogged: true,
        isPlaying: true,
      });
      players = room.getPlayerList();
      reds = players.filter((x) => x.team == 1);
      blues = players.filter((x) => x.team == 2);
      spectators = players.filter((x) => x.team == 0);
      if (reds.length <= blues.length) {
        room.setPlayerTeam(player.id, 1);
      } else {
        room.setPlayerTeam(player.id, 2);
      }
    }

    if (playerData?.isVIP) {
      room.sendAnnouncement(
        `┃ [👑] Se conecto el jugador VIP ${player.name}`,
        null,
        0xffff38,
        "bold",
        1
      );
    }
    if (playerData?.isAdminOFI) {
      room.sendAnnouncement(
        `┃ [👮] Se conecto el admin ${player.name}`,
        null,
        0xffff38,
        "bold",
        1
      );
    }

    const allNicks = await statsDB.find({ auth: player.auth });
    const allNickscon = await statsDB.find({ conexion: player.conn });

    client.channels.cache
      .get(client.config.HAXBALL.CHANNELS.NICKNAME_LOGS)
      .send({
        content:
          `**LISTA DE NICKS DE ${player.name}**\n\nConexion: **${player.conn}**\nAuth: **${player.auth}**\n\n**Nicks por autenticador**\n` +
          "```yaml\n" +
          allNicks.map((x) => x.name).join("\n") +
          "```" +
          `\n**Nicks por conexion**\n` +
          "```yaml\n" +
          allNickscon.map((x) => x.name).join("\n") +
          "```",
      });

    await statsDB.findOneAndUpdate(
      { name: player.name },
      { conexion: player.conn, isLogged: true, id: player.id, isPlaying: true }
    );

    if (players.length == client.config.HAXBALL.MAX_SLOTS) {
      if (!playerData.isAdminOFI) {
        room.kickPlayer(
          player.id,
          "El host esta lleno y no sos administrador!",
          false
        );
      }

      room.setPassword(client.config.HAXBALL.HOST_FULL_PASS);
    }

    players = room.getPlayerList();
    reds = players.filter((x) => x.team == 1);
    blues = players.filter((x) => x.team == 2);
    spectators = players.filter((x) => x.team == 0);

    if (!autoChoice) return;
    if (config.HAXBALL.MODE == "JUEGAN_TODOS") {
      if (reds.length <= blues.length) {
        room.setPlayerTeam(player.id, 1);
      } else {
        room.setPlayerTeam(player.id, 2);
      }
    }
    playersInfo.push({
      id: player.id,
      playerActivity: Date.now(),
      warned: false
    })
    if (players.length === 1) {
      room.startGame();
    }
  };

  room.onPlayerLeave = async function (player) {

    const userData = await statsDB.findOne({
      name: player.name,
      id: player.id,
    });

    client.channels.cache
      .get(client.config.HAXBALL.CHANNELS.PLAYER_LEAVE_LOGS)
      .send({ content: `**PLAYER LEAVE**\nNick: **${player.name}**` });

    userData.isPlaying = false;
    await userData.save();

    players = room.getPlayerList();

    if (players.length < client.config.HAXBALL.MAX_SLOTS) {
      room.setPassword(null);
    }

    playersInfo = playersInfo.filter(info => info.id !== player.id);
  };

  room.onPlayerBallKick = async function (player) {
    secondLastKickerId = lastKickerId;
    secondLastKickerName = lastKickerName;
    secondLastKickerTeam = lastKickerTeam;

    lastKickerId = player.id;
    lastKickerName = player.name;
    lastKickerTeam = player.team;
  }

  room.onTeamGoal = async function (team) {
    const userStats = await statsDB.findOne({ name: lastKickerName });
    const assistStats = await statsDB.findOne({ name: secondLastKickerName });
    players = room.getPlayerList();
    scoresRed = scoresRed + room.getScores().red;
    scoresBlue = scoresBlue + room.getScores().blue;
    tiempo = secondsToMinutes(Math.floor(room.getScores().time));

    if (team == 1) {
      if (lastKickerTeam == 2) {
        room.sendAnnouncement(
          `🔴 NOOO PARA EL OTRO LADO! - ${lastKickerName} [🤡] ${tiempo} - 🟥 ${room.getScores().red
          } - ${room.getScores().blue} 🟦`,
          null,
          0xffff38,
          "bold",
          1
        );

        if (!userStats) return;
        if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS)
          return;
        await statsDB.findOneAndUpdate(
          { name: lastKickerName },
          { $inc: { golesencontra: 1, puntaje: -1 } }
        );
      } else if (
        lastKickerId == secondLastKickerId ||
        lastKickerTeam != secondLastKickerTeam
      ) {
        room.sendAnnouncement(
          `🔴 GOOOOL! - ${lastKickerName} [⚽] ${tiempo} - 🟥 ${room.getScores().red
          } - ${room.getScores().blue} 🟦`,
          null,
          0xffff38,
          "bold",
          1
        );
        if (!userStats) return;
        if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS)
          return;
        await statsDB.findOneAndUpdate(
          { name: lastKickerName },
          { $inc: { goles: 1, puntaje: 3, coins: 2 } }
        );
      } else if (
        lastKickerId != secondLastKickerId ||
        lastKickerTeam == secondLastKickerTeam
      ) {
        room.sendAnnouncement(
          `🔴 GOOOOL! - ${lastKickerName} [⚽]  ${secondLastKickerName} [👟] ${tiempo} - 🟥 ${room.getScores().red
          } - ${room.getScores().blue} 🟦`,
          null,
          0xffff38,
          "bold",
          1
        );

        if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS)
          return;
        if (userStats && assistStats) {
          await statsDB.findOneAndUpdate(
            { name: lastKickerName },
            { $inc: { goles: 1, puntaje: 3, coins: 2 } }
          );
          await statsDB.findOneAndUpdate(
            { name: secondLastKickerName },
            { $inc: { asistencias: 1, puntaje: 2, coins: 1 } }
          );
        } else if (assistStats.isLogged) {
          await statsDB.findOneAndUpdate(
            { name: secondLastKickerName },
            { $inc: { asistencias: 1, puntaje: 2, coins: 1 } }
          );
        } else if (userStats.isLogged) {
          await statsDB.findOneAndUpdate(
            { name: lastKickerName },
            { $inc: { goles: 1, puntaje: 3, coins: 2 } }
          );
        }
      }


    } else if (team == 2) {
      if (lastKickerTeam == 1) {
        room.sendAnnouncement(
          `🔵 NOOO PARA EL OTRO LADO! - ${lastKickerName} [🤡] ${tiempo} - 🟥 ${room.getScores().red
          } - ${room.getScores().blue} 🟦`,
          null,
          0xffff38,
          "bold",
          1
        );

        if (!userStats) return;
        if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS)
          return;
        await statsDB.findOneAndUpdate(
          { name: lastKickerName },
          { $inc: { golesencontra: 1, puntaje: -1 } }
        );
      } else if (
        lastKickerId == secondLastKickerId ||
        lastKickerTeam != secondLastKickerTeam
      ) {
        room.sendAnnouncement(
          `🔵 GOOOOL! - ${lastKickerName} [⚽] ${tiempo} - 🟥 ${room.getScores().red
          } - ${room.getScores().blue} 🟦`,
          null,
          0xffff38,
          "bold",
          1
        );

        if (!userStats) return;
        if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS)
          return;
        await statsDB.findOneAndUpdate(
          { name: lastKickerName },
          { $inc: { goles: 1, puntaje: 3, coins: 2 } }
        );
      } else if (
        lastKickerId != secondLastKickerId ||
        lastKickerTeam == secondLastKickerTeam
      ) {
        room.sendAnnouncement(
          `🔵 GOOOOL! - ${lastKickerName} [⚽]  ${secondLastKickerName} [👟] ${tiempo} - 🟥 ${room.getScores().red
          } - ${room.getScores().blue} 🟦`,
          null,
          0xffff38,
          "bold",
          1
        );

        if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS)
          return;
        if (userStats) {
          await statsDB.findOneAndUpdate(
            { name: lastKickerName },
            { $inc: { goles: 1, puntaje: 3, coins: 2 } }
          );
        } else if (assistStats.isLogged) {
          await statsDB.findOneAndUpdate(
            { name: secondLastKickerName },
            { $inc: { asistencias: 1, puntaje: 2, coins: 1 } }
          );
        }
      }

    }
  };

  room.onTeamVictory = async function (scores) {
    players = room.getPlayerList();
    reds = players.filter((x) => x.team == 1);
    blues = players.filter((x) => x.team == 2);
    spectators = players.filter((x) => x.team == 0);

    if (players.length < client.config.HAXBALL.MIN_PLAYERS_FOR_STATS) return;
    if (scores.red > scores.blue) {

      const nombresReds = reds.map(async (x) => {
        const data = await statsDB.findOne({ name: x.name });

        if (!data || !data.isLogged) return;
        const updateWins = await statsDB.findOneAndUpdate(
          { name: x.name },
          { $inc: { partidos: 1, ganados: 1, puntaje: 3 } }
        );
        const nextLevel = data.nivel + 1;
        const levelPoints = levels[data.nivel + 1].points;

        if (nextLevel && data.puntaje >= levelPoints) {
          const updateLevel = await statsDB.findOneAndUpdate(
            { name: x.name },
            { $inc: { nivel: 1 } },
            { new: true }
          );
          room.sendAnnouncement(
            `[❗] ${data.name} subió al nivel ${updateLevel.nivel} `,
            null,
            0x4dff15,
            "bold",
            1
          );
        }
      });

      const nombresBlues = blues.map(async (x) => {
        const data = await statsDB.findOne({ name: x.name });
        if (!data || !data.isLogged) return;
        const updateWins = await statsDB.findOneAndUpdate(
          { name: x.name },
          { $inc: { partidos: 1, perdidos: 1, puntaje: -3 } }
        );

        const lastLevel = data.nivel - 1;
        const levelPoints = levels[data.nivel - 1].points;

        if (lastLevel >= 1 && data.puntaje < levelPoints) {
          if (data.nivel == 0) return;

          const upateLevel = await statsDB.findOneAndUpdate(
            { name: x.name },
            { $inc: { nivel: -1 } },
            { new: true }
          );
          room.sendAnnouncement(
            `[❗] ${data.name} bajo al nivel ${data.nivel - 1} `,
            null,
            0x4dff15,
            "bold",
            1
          );
        }
      });

      if (gkRed) {
        if (scores.blue == 0) {
          const gkInfo = room.getPlayer(gkRed);
          await statsDB.findOneAndUpdate(
            { name: gkInfo.name },
            { $inc: { vallasinvictas: 1 } }
          );
          room.sendAnnouncement(
            `[🥅] ${gkInfo.name} mantuvo la valla invicta! `,
            null,
            0x4dff15,
            "bold",
            1
          );
        }
      }
    } else {
      const nombresBlues = blues.map(async (x) => {
        const data = await statsDB.findOne({ name: x.name });
        if (!data || !data.isLogged) return;
        const updateWins = await statsDB.findOneAndUpdate(
          { name: x.name },
          { $inc: { partidos: 1, ganados: 1, puntaje: 3 } }
        );
        const nextLevel = data.nivel + 1;
        const levelPoints = levels[data.nivel + 1].points;

        if (nextLevel && data.puntaje >= levelPoints) {
          const upateLevel = await statsDB.findOneAndUpdate(
            { name: x.name },
            { $inc: { nivel: 1 } },
            { new: true }
          );
          room.sendAnnouncement(
            `[❗] ${data.name} subió al nivel ${upateLevel.nivel} `,
            null,
            0x4dff15,
            "bold",
            1
          );
        }
      });

      const nombresReds = reds.map(async (x) => {
        const data = await statsDB.findOne({ name: x.name });
        if (!data || !data.isLogged) return;
        const updateWins = await statsDB.findOneAndUpdate(
          { name: x.name },
          { $inc: { partidos: 1, perdidos: 1, puntaje: -3 } }
        );

        const lastLevel = data.nivel - 1;
        const levelPoints = levels[data.nivel - 1].points;

        if (lastLevel >= 1 && data.puntaje < levelPoints) {
          if (data.nivel == 0) return;

          const upateLevel = await statsDB.findOneAndUpdate(
            { name: x.name },
            { $inc: { nivel: -1 } },
            { new: true }
          );
          room.sendAnnouncement(
            `[❗] ${data.name} bajo al nivel ${upateLevel.nivel} `,
            null,
            0x4dff15,
            "bold",
            1
          );
        }
      });

      if (gkBlue) {
        if (scores.red == 0) {
          const gkInfo = room.getPlayer(gkBlue);
          await statsDB.findOneAndUpdate(
            { name: gkInfo.name },
            { $inc: { vallasinvictas: 1 } }
          );
          room.sendAnnouncement(
            `[🥅] ${gkInfo.name} mantuvo la valla invicta! `,
            null,
            0x4dff15,
            "bold",
            1
          );
        }
      }
    }
  };

  room.onGameStop = function (player) {
    players = room.getPlayerList();
    reds = players.filter((x) => x.team === 1);
    blues = players.filter((x) => x.team === 2);
    spectators = players.filter((x) => x.team === 0);

    if (!player) {
      if (config.HAXBALL.MODE === "JUEGAN_TODOS") {
        try {
          var players = room.getPlayerList();
          players.forEach(function (player) {
            room.setPlayerTeam(player.id, 0);
          });

          for (var i = players.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = players[i];
            players[i] = players[j];
            players[j] = temp;
          }

          var team = 1;
          setTimeout(() => {
            players.forEach(function (player) {
              room.setPlayerTeam(player.id, team);
              team = team === 1 ? 2 : 1;
            });
            room.startGame();
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  room.onPlayerKicked = function (player, reason, ban, by) {
    async function checkBan() {
      if (ban) {
        const data = await statsDB.findOne({ name: player.name });
        let executor = by ? by.name : "Sistema";
        let banReason = reason || "No puso razon";

        data.isBanned = true;
        await data.save();

        client.channels.cache
          .get(client.config.HAXBALL.CHANNELS.BANS_LOGS)
          .send({
            embeds: [
              new MessageEmbed()
                .setColor("RED")
                .setTitle(`USUARIO BANEADO`)
                .setDescription(
                  `El usuario **${executor}** baneó a **${player.name}** por la razon: **${banReason}**`
                ),
            ],
          });
      }
    }
    checkBan();
  };

  room.onPositionsReset = async function () {
    const allData = await statsDB.find();
    const loggedPlayers = allData.filter((x) => x.isPlaying && x.size != 15);

    loggedPlayers.map(async (x) => {
      room.setPlayerDiscProperties(x.id, { radius: x.size });
    });
  };

  room.onPlayerChat = function (player, msg) {

    if (msg.startsWith("!")) {
      async function commands() {
        msg = msg.substr(1);
        let args = msg.split(" ");
        args[0] = args[0].toLowerCase();

        if (args[0] == "discordsync" && args.length >= 2) {
          const code = args[1];
          const checkCode = await syncModel.findOne({ code: code });
          if (!checkCode) return;

          await statsDB.findOneAndUpdate(
            { name: player.name },
            { discordID: checkCode.userID }
          );
          (
            await client.guilds.cache
              .get(client.config.GUILDID)
              .members.fetch(`${checkCode.userID}`)
          ).roles.add("1121118676901449809");

          sendAnnounce(
            `El usuario ${player.name} vinculó su cuenta de discord con haxball!`,
            null,
            0x4dff15,
            "bold",
            1
          );
        } else if (args[0] == "blacklist" && player.admin && args.length >= 2) {
          let usuario = args.slice(1).join(" ");
          const userData = await statsDB.findOne({ name: usuario });

          if (!userData) {
            sendAnnounce(
              `[❗] ${usuario} no esta registrado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          } else if (userData.isBlacklisted) {
            sendAnnounce(
              `[❗] ${usuario} ya esta blacklisteado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          }

          userData.isBlacklisted = true;
          await userData.save();
          room.kickPlayer(
            userData.id,
            `Blacklisteado por ${player.name}`,
            true
          );

          sendAnnounce(
            `[⚠️] El usuario ${usuario} fue blacklisteado por ${player.name}!`,
            null,
            0xff1111,
            "bold",
            1
          );
        } else if (args[0] == "unban" && player.admin && args.length >= 2) {
          let usuario = args.slice(1).join(" ");
          const userData = await statsDB.findOne({ name: usuario });

          if (!userData) {
            sendAnnounce(
              `[❗] ${usuario} no esta registrado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          } else if (!userData.isBanned) {
            sendAnnounce(
              `[❗] ${usuario} no esta baneado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          }

          userData.isBanned = false;
          await userData.save();
          room.clearBan(userData.id);

          sendAnnounce(
            `[❗] El usuario ${usuario} fue unbaneado por ${player.name}!`,
            null,
            0x4dff15,
            "bold",
            1
          );
        } else if (args[0] == "bans" && player.admin) {
          const allBans = await statsDB.find({ isBanned: true });
          sendAnnounce(
            `[🤓 Lista de baneados] ${allBans
              .map((x) => `(${x.id}) ${x.name}`)
              .join(", ")} `,
            player.id,
            0x4dff15,
            "bold",
            1
          );
        } else if (args[0] == "me") {
          sendStats(player.name, player.id, null);
        } else if (args[0] == "stats" && args.length >= 2) {
          let usuario = args.slice(1).join(" ");
          const userStats = await sendStats(usuario, player.id, player.name);
        } else if (args[0] == "bb" || args[0] == "nv") {
          room.kickPlayer(player.id, "Hasta pronto!", false);
        } else if (args[0] == "autochoice" && player.admin) {
          if (autoChoice) {
            autoChoice = false;
            sendAnnounce(
              `[❗] ${player.name} desactivó el modo auto choice!`,
              null,
              0x89fc70,
              "bold",
              1
            );
          } else {
            autoChoice = true;
            sendAnnounce(
              `[❗] ${player.name} activó el modo auto choice!`,
              null,
              0x89fc70,
              "bold",
              1
            );
          }
        } else if (args[0] == "size") {
          const userData = await statsDB.findOne({ name: player.name });
          if (!userData.isVIP && !userData.sizeAccess) return false;

          const size = args[1];
          if (isNaN(size)) {
            room.setPlayerDiscProperties(player.id, { radius: 15 });
            sendAnnounce(
              `[❗] No puedes poner ${size} como size, tiene que ser un numero entre 12-17!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          } else if (size > 17 || size < 12) {
            sendAnnounce(
              `[❗] Solo puedes poner size entre 12 y 17!`,
              player.id,
              0xff0000,
              "bold",
              1
            );
          } else {
            room.setPlayerDiscProperties(player.id, { radius: size });
            sendAnnounce(
              `El size se cambio a ${size}!`,
              player.id,
              0x00ff00,
              "bold",
              1
            );
            await statsDB.findOneAndUpdate(
              { name: player.name },
              { size: size }
            );
          }
        } else if (args[0] == "help" || args[0] == "ayuda") {
          if (!player.admin) {
            sendAnnounce(
              `Comandos de Usuario`,
              player.id,
              0x4dff15,
              "small-bold",
              1
            );
            sendAnnounce(
              `┃ !stats, !me, !bb, !nv, !size, !estadio, !ds, !llamaradmin <razon>, !coins, !tienda, !comprar, !coinspay, !claimcoins, !poderes, !powershot, !gigante, !todoschiquitos`,
              player.id,
              0xffffff,
              "small-bold",
              1
            );
          } else {
            sendAnnounce(
              `  Comandos de Usuario`,
              player.id,
              0x4dff15,
              "small-bold",
              1
            );
            sendAnnounce(
              `┃ !stats, !me, !bb, !nv, !size, !estadio, !ds, !llamaradmin <razon>, !coins, !tienda, !comprar, !coinspay, !claimcoins, !poderes, !powershot, !gigante, !todoschiquitos`,
              player.id,
              0xffffff,
              "small-bold",
              1
            );
            sendAnnounce(
              `  Comandos de Administrador`,
              player.id,
              0x4dff15,
              "small-bold",
              1
            );
            sendAnnounce(
              `┃ !ban, !unban, !mute, !unmute !blacklist, !setvip, !removevip, !advertir`,
              player.id,
              0xffffff,
              "small-bold",
              1
            );
          }
        } else if (args[0] == "clearbans" && player.admin) {
          room.clearBans();
          sendAnnounce(
            `[❗] ${player.name} eliminó todos los baneos!`,
            null,
            0x4dff15,
            "bold",
            1
          );
        } else if (args[0] == "ds" || args[0] == "discord") {
          sendAnnounce(
            `[❗] Nuestro discord es: https://discord.gg/6k4tTkexdD`,
            player.id,
            0x5ca3f7,
            "bold",
            1
          );
        } else if (args[0] == "llamaradmin" && args.length > 2) {
          const llamadaRazon = args.slice(1).join(" ");
          client.channels.cache
            .get(client.config.HAXBALL.CHANNELS.LLAMAR_ADMIN)
            .send({
              embeds: [
                new MessageEmbed()
                  .setColor("ORANGE")
                  .setTitle("ALERTA")
                  .setDescription(
                    `El usuario **${player.name}** uso el comando !llamaradmin.\nRazón: **${llamadaRazon}**\nHost: **${config.HAXBALL.ROOM_NAME}**`
                  ),
              ],
            });
          sendAnnounce(
            `Se llamo a un admin correctamente!`,
            player.id,
            0x5ca3f7,
            "bold",
            1
          );
        } else if (args[0] == "mute" && args.length > 2 && player.admin) {
          const muteUser = args.slice(1).join(" ");
          setMute(muteUser, player.id);
        } else if (args[0] == "unmute" && args.length > 2 && player.admin) {
          const unmuteUser = args.slice(1).join(" ");
          removeMute(unmuteUser, player.id);
        } else if (args[0] == "advertir" && args.length > 1 && player.admin) {
          const warnUser = args.slice(1).join(" ");

          const warnData = await statsDB.findOne({ name: warnUser });
          if (!warnData) {
            sendAnnounce(
              `[❗] ${warnUser} no esta registrado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          }

          const updateWarning = await warningsDB.findOne({ name: warnUser });

          if (!updateWarning) {
            await warningsDB.create({ name: warnUser });
            sendAnnounce(
              `[❗] ${warnUser} fue advertido por ${player.name}!`,
              null,
              0x4dff15,
              "bold",
              1
            );
            sendAnnounce(
              `[❗] ${warnUser} fuiste advertido por ${player.name}!\nTotal de advertencias: 1/3`,
              warnData.id,
              0x4dff15,
              "bold",
              1
            );
          } else {
            const updateWarning = await warningsDB.findOneAndUpdate(
              { name: warnUser },
              { $inc: { warnings: 1 } },
              { new: true }
            );
            sendAnnounce(
              `[❗] ${warnUser} fue advertido por ${player.name}!`,
              null,
              0x4dff15,
              "bold",
              1
            );
            sendAnnounce(
              `[❗] ${warnUser} fuiste advertido por ${player.name}!\nTotal de advertencias: ${updateWarning.warnings}/3`,
              warnData.id,
              0x4dff15,
              "bold",
              1
            );

            if (updateWarning.warnings >= 3) {
              room.kickPlayer(
                updateWarning.id,
                "Limite de advertencias excedido (3)",
                true
              );
              sendAnnounce(
                `[❗] ${warnUser} fue sancionado por exceder limite de advertencias (3).`,
                null,
                0x4dff15,
                "bold",
                1
              );
              await warningsDB.findOneAndUpdate(
                { name: warnUser },
                { warnings: 0 }
              );
            }
          }
        } else if (args[0] == "setvip" && args.length > 1 && player.admin) {
          const vipUser = args.slice(1).join(" ");
          const vipData = await statsDB.findOne({ name: vipUser });

          if (!vipData) {
            sendAnnounce(
              `[❗] ${vipUser} no esta registrado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          }

          await statsDB.findOneAndUpdate({ name: vipUser }, { isVIP: true });
          sendAnnounce(
            `[❗] ${vipUser} ahora es vip!`,
            null,
            0x4dff15,
            "bold",
            1
          );
        } else if (args[0] == "removevip" && args.length > 1 && player.admin
        ) {
          const vipUser = args.slice(1).join(" ");

          const vipData = await statsDB.findOne({ name: vipUser });

          if (!vipData) {
            sendAnnounce(
              `[❗] ${vipUser} no esta registrado!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          } else if (!vipData.isVIP) {
            sendAnnounce(
              `[❗] ${vipUser} no es usuario VIP!`,
              player.id,
              0x4dff15,
              "bold",
              1
            );
            return false;
          }

          await statsDB.findOneAndUpdate({ name: vipUser }, { isVIP: false });
          sendAnnounce(
            `[❗] ${vipUser} ya no es vip!`,
            null,
            0x4dff15,
            "bold",
            1
          );
        } else if (args[0] == "coins") {
          const coinsData = await statsDB.findOne({ name: player.name });

          sendAnnounce(
            `[🪙] ${player.name} tienes ${coinsData.coins} monedas.`,
            player.id,
            0x7cf9e8,
            "bold",
            1
          );
        } else if (args[0] == "tienda") {
          sendAnnounce(
            `🪙 Tienda de coins`,
            player.id,
            0x7cf9e8,
            "small-bold",
            1
          );
          sendAnnounce(
            `Puedes comprar cualquiera de los siguientes comandos usando !comprar (size/chatcolor/vip/premium/setprefix/permavip/permapremium/gigante/powershot/todoschiquitos)`,
            player.id,
            0x7cf9e8,
            "small-bold",
            1
          );
          sendAnnounce(
            `・!size (100 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・!chatcolor (150 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(`・VIP (280 coins)`, player.id, 0xffffff, "small-bold", 1);
          sendAnnounce(
            `・!setprefix (300 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・Premium (380 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・Vip permanente (2000 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・Premium Permanente (3500 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・!gigante por 8 segundos (Poder 1 uso) (50 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・!powershot (Poder 1 uso) (70 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・!todoschiquitos (Poder 1 uso) (120 coins)`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
        } else if (args[0] == "poderes") {
          const poderesData = await poderesDB.findOne({ name: player.name });

          sendAnnounce(`🏹 PODERES`, player.id, 0x7cf9e8, "small-bold", 1);
          sendAnnounce(
            `・Gigante: Te hace gigante durante 8 segundos, usos: (${poderesData ? poderesData.gigante : 0
            }).`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・Powershot: Te da un tiro con mucha potencia durante 5 segundos, usos: (${poderesData ? poderesData.power : 0
            }).`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
          sendAnnounce(
            `・Todos Chiquitos: Hace a todos los del equipo contrario chiquitos durante 15 segundos, usos: (${poderesData ? poderesData.todosChiquitos : 0
            }).`,
            player.id,
            0xffffff,
            "small-bold",
            1
          );
        } else if (args[0] == "comprar") {
          let precioGigante = 25;
          let precioTodosChiquitos = 100;
          let PrecioPowerShot = 50;
          let precioSize = 100;
          let precioChat = 150;
          let precioPrefix = 300;
          let precioVIP = 300;
          let precioPremium = 1000;
          let precioPermaVip = 2000;
          let precioPermaPremium = 3500;

          const userData = await statsDB.findOne({
            name: player.name,
            isLogged: true,
          });
          const userCoins = userData.coins;

          switch (args[1].toLowerCase()) {
            case "size":
              if (userCoins >= precioSize) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioSize }, sizeAccess: true }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró el !size usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioSize} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "chatcolor":
              if (userCoins >= precioChat) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioChat }, chatColorAccess: true }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró el !chatcolor usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioChat} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "vip":
              if (userCoins >= precioVIP) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioVIP }, isVIP: true }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró VIP usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioVIP} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "premium":
              if (userCoins >= precioPremium) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioPremium }, isPremium: true }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró PREMIUM usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioPremium} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "setprefix":
              if (userCoins >= precioPrefix) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioPrefix }, prefixAccess: true }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró el !setprefix usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioPrefix} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "permavip":
              if (userCoins >= precioPermaVip) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioPermaVip }, vipPermanent: true, isVIP: true }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró VIP Permanente usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioPermaVip} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "permapremium":
              if (userCoins >= precioPermaVip) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  {
                    $inc: { coins: -precioPermaPremium },
                    premiumPermanent: true,
                    isPremium: true
                  }
                );
                sendAnnounce(
                  `[🪙] ${player.name} compró PREMIUM Permanente usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioPermaPremium} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "gigante":
              if (userCoins >= precioGigante) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioGigante } }
                );
                const poderesData = await poderesDB.findOne({
                  name: player.name,
                });

                sendAnnounce(
                  `[🪙] ${player.name} compró el poder GIGANTE usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );

                if (!poderesData) {
                  poderesDB.create({ name: player.name, gigante: 1 });
                } else {
                  poderesData.gigante++;
                  await poderesData.save();
                }
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioGigante} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "powershot":
              if (userCoins >= PrecioPowerShot) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -PrecioPowerShot } }
                );
                const poderesData = await poderesDB.findOne({
                  name: player.name,
                });

                sendAnnounce(
                  `[🪙] ${player.name} compró el poder POWERSHOT usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );

                if (!poderesData) {
                  poderesDB.create({ name: player.name, power: 1 });
                } else {
                  poderesData.power++;
                  await poderesData.save();
                }
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioGigante} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
            case "todoschiquitos":
              if (userCoins >= precioTodosChiquitos) {
                await statsDB.findOneAndUpdate(
                  { name: player.name },
                  { $inc: { coins: -precioTodosChiquitos } }
                );
                const poderesData = await poderesDB.findOne({
                  name: player.name,
                });

                sendAnnounce(
                  `[🪙] ${player.name} compró el poder TODOS CHIQUITOS usando el comando !comprar`,
                  null,
                  0x7cf9e8,
                  "bold",
                  1
                );

                if (!poderesData) {
                  poderesDB.create({ name: player.name, todosChiquitos: 1 });
                } else {
                  poderesData.todosChiquitos++;
                  await poderesData.save();
                }
              } else {
                sendAnnounce(
                  `🪙 No tienes las monedas suficientes, necesitas ${precioTodosChiquitos} y tienes ${userCoins}`,
                  player.id,
                  0x7cf9e8,
                  "bold",
                  1
                );
              }

              break;
          }
        } else if (args[0] == "afk") {
          const userUltimate = await statsDB.findOne({ name: player.name });
          if (userUltimate.isUltimate) {
            sendAnnounce(
              `[❗] ${player.name} esta afk!`,
              null,
              0x7cf9e8,
              "bold",
              1
            );
            room.setPlayerTeam(player.id, 0);
          }
        } else if (args[0] == "setchatcolor" && args.length > 1) {
          const statsUser = await statsDB.findOne({ name: player.name });

          if (!statsUser) return false;
          if (!statsUser.chatColorAccess && !statsUser.isVIP) return false;

          const chatColorP = args[1];

          await statsDB.findOneAndUpdate(
            { name: player.name },
            { chatColor: chatColorP }
          );

          sendAnnounce(
            `[❗] ${player.name} cambiaste el color de tus mensajes a ${chatColorP}`,
            player.id,
            0x7cf9e8,
            "bold",
            1
          );

        } else if (args[0] == "coinsgive" && args.length > 1 && player.admin && player.name == "rana") {
          const coinsAmount = parseInt(args[1]);
          const username = args.slice(2).join(" ");

          const coinsUser = await statsDB.findOne({ name: player.name });

          const statsUser = await statsDB.findOne({ name: username });
          if (!statsUser) return false;

          const updatedUser = await statsDB.findOneAndUpdate(
            { name: username },
            { $inc: { coins: coinsAmount } },
            { new: true }
          );

          sendAnnounce(
            `[🪙] ${player.name} le dió ${coinsAmount} monedas a ${username}`,
            null,
            0x7cf9e8,
            "bold",
            1
          );
        } else if (args[0] == "coinspay" && args.length > 1) {
          const coinsAmount = parseInt(args[1]);
          if (coinsAmount <= 0) return;
          const username = args.slice(2).join(" ");

          const coinsUser = await statsDB.findOne({ name: player.name });

          if (coinsAmount > coinsUser.coins) {
            sendAnnounce(
              `[🪙] ${player.name} no tenes las monedas suficientes!`,
              player.id,
              0x7cf9e8,
              "bold",
              1
            );
            return false;
          }

          const statsUser = await statsDB.findOne({ name: username });
          if (!statsUser) return false;

          const updatedUser = await statsDB.findOneAndUpdate(
            { name: username },
            { $inc: { coins: coinsAmount } },
            { new: true }
          );
          const updatePayed = await statsDB.findOneAndUpdate(
            { name: player.name },
            { $inc: { coins: -coinsAmount } }
          );

          sendAnnounce(
            `[🪙] ${player.name} le pagó ${coinsAmount} monedas a ${username}`,
            null,
            0x7cf9e8,
            "bold",
            1
          );
        } else if (
          args[0] == "iniciarsorteo" &&
          args.length > 1 &&
          player.admin
        ) {
          if (giveawayTime) return;

          palabraSorteo = args[1];
          giveawayTime = true;

          sendAnnounce(
            `[🎊] ${player.name} inició un sorteo para el primero que adivine la palabra!`,
            null,
            0x00ff98,
            "bold"
          );
        } else if (args[0] == "setprefix" && args.length > 1) {
          if (giveawayTime) return;

          const checkAccess = await statsDB.findOne({ name: player.name });
          if (!checkAccess.prefixAccess) return;

          let nuevoPrefix = args[1];

          await statsDB.findOneAndUpdate(
            { name: player.name },
            { prefix: `${nuevoPrefix}` }
          );
          sendAnnounce(
            `[🎨] ${player.name} pusiste tu prefix como ${nuevoPrefix}`,
            player.id,
            0x00ff98,
            "bold"
          );
        } else if (args[0] == "chatlock" && player.admin) {
          if (chatLocked) {
            chatLocked = false;
            sendAnnounce(
              `[🔓] ${player.name} desbloqueó el chat!`,
              null,
              0x00ff98,
              "bold"
            );
            return false;
          }
          chatLocked = true;
          sendAnnounce(
            `[🔒] ${player.name} bloqueó el chat!`,
            null,
            0x00ff98,
            "bold"
          );
        } else if (args[0] == "reiniciarpalabra" && player.admin) {
          adivinaTime = false;
        } else if (args[0] == "claimcoins") {
          sendAnnounce(
            `[🪙] ${player.name} para reclamar las 200 coins gratis hace lo siguiente:\n- Entra al servidor de discord de la comunidad (discord.gg/WhjqRXMdju).\n- Usa el comando '/synchax' y vincula tu cuenta de discord con haxball.\n- Una vez vinculado usa '/claimcoins' en discord y se te van a depositar automaticamente las 200 coins!`,
            player.id,
            0x00ff98,
            "small-bold"
          );
        } else if (args[0] == "gigante") {
          let poderesData = await poderesDB.findOne({ name: player.name });

          if (!poderesData || poderesData.gigante <= 0) return;

          room.setPlayerDiscProperties(player.id, { radius: 25 });
          sendAnnounce(
            `[🦍] ${player.name} Uso un poder y se hizo gigante por 8 segundos!`,
            null,
            0x00ff98,
            "small-bold"
          );

          poderesData.gigante--;
          await poderesData.save();

          setTimeout(async () => {
            room.setPlayerDiscProperties(player.id, { radius: 15 });
            sendAnnounce(
              `[🦍] ${player.name} Se te acabó el poder!`,
              player.id,
              0x00ff98,
              "small-bold"
            );
          }, 8000);
        } else if (args[0] == "powershot") {
          let poderesData = await poderesDB.findOne({ name: player.name });
          if (!poderesData || poderesData.power <= 0) return;

          room.setPlayerDiscProperties(player.id, { bCoeff: 28 });
          sendAnnounce(
            `[🦍] ${player.name} Uso el poder powershot!`,
            null,
            0x00ff98,
            "small-bold"
          );
          sendAnnounce(
            `[🦍] ${player.name
            } Tenes 5 segundos para usar el powershot, te quedan (${poderesData.power - 1
            }) usos!`,
            player.id,
            0x00ff98,
            "small-bold"
          );

          poderesData.power--;
          await poderesData.save();

          setTimeout(async () => {
            sendAnnounce(
              `[🦍] ${player.name} Se te acabó el poder!`,
              player.id,
              0x00ff98,
              "small-bold"
            );
            room.setPlayerDiscProperties(player.id, { bCoeff: 0 });
          }, 5000);
        } else if (args[0] == "todoschiquitos") {
          let poderesData = await poderesDB.findOne({ name: player.name });
          if (!poderesData || poderesData.todosChiquitos <= 0) return;

          let playerTeam = room.getPlayer(player.id).team;

          if (playerTeam == 1) {
            let teamBlue = room.getPlayerList().filter((x) => x.team == 2);

            teamBlue.forEach((x) => {
              room.setPlayerDiscProperties(x.id, { radius: 10 });
            });

            sendAnnounce(
              `[👦] ${player.name} Uso el poder todos chiquitos, ahora son todos chiquitos durante 15 segundos!`,
              null,
              0x00ff98,
              "small-bold"
            );
            sendAnnounce(
              `[👦] ${player.name} Te quedan (${poderesData.todosChiquitos - 1
              }) usos!`,
              player.id,
              0x00ff98,
              "small-bold"
            );

            poderesData.todosChiquitos--;
            await poderesData.save();

            setTimeout(async () => {
              teamBlue.forEach((x) => {
                room.setPlayerDiscProperties(x.id, { radius: 15 });
              });

              sendAnnounce(
                `[👦] Todos vuelven a la normalidad!`,
                null,
                0x00ff98,
                "small-bold"
              );
            }, 25000);
          } else if (playerTeam == 2) {
            let teamRed = room.getPlayerList().filter((x) => x.team == 1);

            teamRed.forEach((x) => {
              room.setPlayerDiscProperties(x.id, { radius: 10 });
            });

            sendAnnounce(
              `[👦] ${player.name} Uso el poder todos chiquitos, ahora son todos chiquitos durante 15 segundos!`,
              null,
              0x00ff98,
              "small-bold"
            );
            sendAnnounce(
              `[👦] ${player.name} Te quedan (${poderesData.todosChiquitos - 1
              }) usos!`,
              player.id,
              0x00ff98,
              "small-bold"
            );

            poderesData.todosChiquitos--;
            await poderesData.save();

            setTimeout(async () => {
              teamRed.forEach((x) => {
                room.setPlayerDiscProperties(x.id, { radius: 15 });
              });

              sendAnnounce(
                `[👦] Todos vuelven a la normalidad!`,
                null,
                0x00ff98,
                "small-bold"
              );
            }, 25000);
          }
        }
      }
      commands();
      return false;
    } else if (msg.startsWith("-") && player.admin) {
      let args = msg.split(" ");
      let messageAdmin = args.slice(1).join(" ");
      var playersAdmin = room.getPlayerList().filter((player) => player.admin);
      playersAdmin.forEach(function (adminPlayer) {
        room.sendAnnouncement(
          `[CHAT ADMINS] ${player.name}: ${messageAdmin}`,
          adminPlayer.id,
          0xffff00,
          "bold",
          1
        );
      });
      return false;
    }
    if (msg) {
      let palabrasProhibidas = [
        "puto",
        "gay",
        "pelotudo",
        "tonto",
        "manco",
        "noob",
        "malo",
        "puta",
        "rata",
        "mogo",
        "mongolico",
        "mogolico",
      ];

      async function chatColors() {
        let statsUser = await statsDB.findOne({ name: player.name });

        if (player.team == 1 && msg.trim().startsWith("t ")) {
          let args = msg.split(" ");
          let messageRed = args.slice(1).join(" ");
          var playersRed = room
            .getPlayerList()
            .filter((player) => player.team === 1);
          playersRed.forEach(function (playerRed) {
            sendAnnounce(
              `🔴[CHAT-TEAM] ${player.name} » ${messageRed}`,
              playerRed.id,
              0xe6303f,
              "bold"
            );
          });

          return false;
        } else if (player.team == 2 && msg.trim().startsWith("t ")) {
          let args = msg.split(" ");
          let messageBlue = args.slice(1).join(" ");
          var playersBlue = room
            .getPlayerList()
            .filter((player) => player.team == 2);
          playersBlue.forEach(function (playerBlue) {
            sendAnnounce(
              `🔵[CHAT-TEAM] ${player.name} » ${messageBlue}`,
              playerBlue.id,
              0x3683ff,
              "bold"
            );
          });

          return false;
        } else if (giveawayTime) {
          if (msg == palabraSorteo) {
            sendAnnounce(
              `[🎊] ${player.name} adivinó la palabra (${palabraSorteo}) y ganó el sorteo!`,
              null,
              0x00ff98,
              "bold"
            );
            giveawayTime = false;
            return true;
          }
        } else if (adivinaTime) {
          if (msg == adivinaPalabra) {
            sendAnnounce(
              `[🎊] ${player.name} escribió la palabra (${adivinaPalabra}) primero que todos y ganó 5 coins!`,
              null,
              0x00ff98,
              "small-bold"
            );
            adivinaTime = false;

            await statsDB.findOneAndUpdate(
              { name: player.name },
              { $inc: { coins: 5 } }
            );
            sendAnnounce(
              `[🎊] ${player.name} recibiste 5 coins!`,
              player.id,
              0x00ff98,
              "bold"
            );
            return true;
          }
        }

        if (player.admin) {
          if (!statsUser.isAdminOFI) {
            sendAnnounce(
              `【💻】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
              null,
              0x86f7fd,
              "normal",
              1
            );
            return false;
          } else if (statsUser.isAdminOFI) {
            if (statsUser.isUltimate) {
              if (statsUser.chatColor) {
                if (statsUser.prefix) {
                  sendAnnounce(
                    `【${statsUser.prefix}】【👑ULTIMATE】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    statsUser.chatColor,
                    "bold",
                    1
                  );
                } else {
                  sendAnnounce(
                    `【👑ULTIMATE】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    statsUser.chatColor,
                    "bold",
                    1
                  );
                }
              } else {
                if (statsUser.prefix) {
                  sendAnnounce(
                    `【${statsUser.prefix}】【👑ULTIMATE】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    0xc309ff,
                    "bold",
                    1
                  );
                } else {
                  sendAnnounce(
                    `【👑ULTIMATE】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    0xc309ff,
                    "bold",
                    1
                  );
                }
              }
              return false;
            } else if (statsUser.isPremium) {
              if (statsUser.chatColor) {
                if (statsUser.prefix) {
                  sendAnnounce(
                    `【${statsUser.prefix}】【👑PREMIUM】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    statsUser.chatColor,
                    "bold",
                    1
                  );
                } else {
                  sendAnnounce(
                    `【👑PREMIUM】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    statsUser.chatColor,
                    "bold",
                    1
                  );
                }
              } else {
                if (statsUser.prefix) {
                  sendAnnounce(
                    `【${statsUser.prefix}】【👑PREMIUM】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    0xffff00,
                    "bold",
                    1
                  );
                } else {
                  sendAnnounce(
                    `【👑PREMIUM】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    0xffff00,
                    "bold",
                    1
                  );
                }
              }
              return false;
            } else if (statsUser.isVIP) {
              if (statsUser.chatColor) {
                if (statsUser.prefix) {
                  sendAnnounce(
                    `【${statsUser.prefix}】【⭐VIP】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    statsUser.chatColor,
                    "bold",
                    1
                  );
                } else {
                  sendAnnounce(
                    `【⭐VIP】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    statsUser.chatColor,
                    "bold",
                    1
                  );
                }
              } else {
                if (statsUser.prefix) {
                  sendAnnounce(
                    `【${statsUser.prefix}】【⭐VIP】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    0xffff00,
                    "bold",
                    1
                  );
                } else {
                  sendAnnounce(
                    `【⭐VIP】【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                    null,
                    0xffff00,
                    "bold",
                    1
                  );
                }
              }
            } else {
              sendAnnounce(
                `【${statsUser.adminLevel}】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                0xc5f87b,
                "bold",
                1
              );
              return false;
            }
          }
        } else if (chatLocked) {
          return false;
        } else if (statsUser.isMuted) {
          return false;
        } else if (statsUser.isUltimate) {
          if (statsUser.chatColor) {
            if (statsUser.prefix) {
              sendAnnounce(
                `【${statsUser.prefix}】【👑ULTIMATE】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
            } else {
              sendAnnounce(
                `【👑ULTIMATE】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
            }
          } else {
            if (statsUser.prefix) {
              sendAnnounce(
                `【${statsUser.prefix}】【👑ULTIMATE】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                null,
                0xc309ff,
                "bold",
                1
              );
            } else {
              sendAnnounce(
                `【👑ULTIMATE】【lvl:${statsUser.nivel}】${player.name} » ${msg}`,
                null,
                0xc309ff,
                "bold",
                1
              );
            }
          }
          return false;
        } else if (statsUser.isPremium) {
          if (statsUser.chatColor) {
            if (statsUser.prefix) {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【${statsUser.prefix}】【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  statsUser.chatColor,
                  "bold",
                  1
                );
                return false;
              }

              sendAnnounce(
                `【${statsUser.prefix}】【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
            } else {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  statsUser.chatColor,
                  "bold",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
            }
          } else {
            if (statsUser.prefix) {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【${statsUser.prefix}】【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  0xffff00,
                  "bold",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【${statsUser.prefix}】【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                0xffff00,
                "bold",
                1
              );
            } else {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  0xffff00,
                  "bold",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【👑PREMIUM】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                0xffff00,
                "bold",
                1
              );
            }
          }
          return false;
        } else if (statsUser.isVIP) {
          if (statsUser.chatColor) {
            if (statsUser.prefix) {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【${statsUser.prefix}】【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  statsUser.chatColor,
                  "normal",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【${statsUser.prefix}】【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
            } else {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  statsUser.chatColor,
                  "bold",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
            }
          } else {
            if (statsUser.prefix) {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【${statsUser.prefix}】【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  0xfffb77,
                  "bold",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【${statsUser.prefix}】【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                0xfffb77,
                "bold",
                1
              );
            } else {
              if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
                sendAnnounce(
                  `【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                  null,
                  0xfffb77,
                  "bold",
                  1
                );
                return false;
              }
              sendAnnounce(
                `【🌟VIP】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
                null,
                0xfffb77,
                "bold",
                1
              );
            }
          }
          return false;
        } else if (statsUser.chatColor) {
          if (statsUser.prefix) {
            if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
              sendAnnounce(
                `【${statsUser.prefix}】【lvl:${statsUser.nivel}】 ${player.name} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );    // Creado por r|a|n|a )
              return false;
            }
            sendAnnounce(
              `【${statsUser.prefix}】【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
              null,
              statsUser.chatColor,
              "bold",
              1
            );
          } else {
            if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
              sendAnnounce(
                `【lvl:${statsUser.nivel}】 ${player.name} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
                null,
                statsUser.chatColor,
                "bold",
                1
              );
              return false;
            }
            sendAnnounce(
              `【lvl:${statsUser.nivel}】 ${player.name} » ${msg}`,
              null,
              statsUser.chatColor,
              "bold",
              1
            );
          }
        } else if (player.team == 1) {
          if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
            sendAnnounce(
              `【lvl:${statsUser.nivel}】【🔴】 ${player.name} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
              null,
              0xffffff,
              "normal",
              1
            );
            return false;
          }
          sendAnnounce(
            `【lvl:${statsUser.nivel}】【🔴】 ${player.name} » ${msg}`,
            null,
            0xffffff,
            "normal",
            1
          );
          return false;
        } else if (player.team == 2) {
          if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
            sendAnnounce(
              `【lvl:${statsUser.nivel}】【🔵】 ${player.name} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
              null,
              0xffffff,
              "normal",
              1
            );
            return false;
          }

          sendAnnounce(
            `【lvl:${statsUser.nivel}】【🔵】 ${player.name} » ${msg}`,
            null,
            0xffffff,
            "normal",
            1
          );
          return false;
        } else if (player.team == 0) {
          if (palabrasProhibidas.some((palabra) => msg.includes(palabra))) {
            sendAnnounce(
              `【lvl:${statsUser.nivel}】【⚪】 ${player.name} » Insulto a los demas porque me gusta comer penes y soy muy malo en el juego..`,
              null,
              0xffffff,
              "normal",
              1
            );
            return false;
          }
          sendAnnounce(
            `【lvl:${statsUser.nivel}】【⚪】 ${player.name} » ${msg}`,
            null,
            0xffffff,
            "normal",
            1
          );
          return false;
        }
      }
      chatColors();
      return false;
    }

    // Creado por rana (Discord: 17pxy)
  };

  room.onPlayerActivity = function (player) {
    const foundPlayer = playersInfo.find((p) => p.id === player.id)

    if (foundPlayer) {
      foundPlayer.playerActivity = Date.now();
    }
  };

  room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    const foundPlayer = playersInfo.find((p) => p.id === changedPlayer.id)
    foundPlayer.playerActivity = Date.now();
  }

  room.onGameTick = function () {
    checkIfAfk();
  }

  function checkIfAfk() {
    const AFK_KICK_TIME = 30 * 1000; // A los 30 segundos lo kickea
    const AFK_WARNING_TIME = 15 * 1000 // A los 15 segundos da un aviso 
    const now = Date.now();
    playersInfo.forEach(player => {
      const playerObj = room.getPlayer(player.id)
      if (playerObj !== null && playerObj.team === 0) return;

      if (Math.abs(player.playerActivity - now) > AFK_KICK_TIME) {
        room.kickPlayer(player.id, `Fuiste kickeado por AFK.`);
      }

      else if (Math.abs(player.playerActivity - now) > AFK_WARNING_TIME && !player.warned) {
        room.sendAnnouncement(
          `[❗] ¡Si no te mueves en 15 segundos, serás kickeado por AFK!`,
          player.id,
          0xff0000,
          "bold",
          2
        );
        player.warned = true;
      }
    });
  }

  const anunDisc = [
    "[❗] Entra a nuestro servidor de discord para recibir todas las novedades sobre la comunidad!",
    `${client.config.HAXBALL.DISCORD}`,
  ];
  const anunAyuda = [
    "[❗] Puedes ver la lista de todos los comandos usando !ayuda",
  ];
  const anunCoins = [
    "[🪙] Puedes comprar comandos/vip usando tus coins con el comando !tienda.",
  ];
  const anunTop = [
    "[🔝] ¡Compite por ser el mejor en el host! Mira tus stats usando !me.",
  ];
  const anunCoinsFree = [
    "[🪙] Puedes reclamar 200 coins iniciales gratis usando '!claimcoins'.",
  ];
  const anunPoderes = [
    "[🦸] Puedes ver la lista de poderes que hay en el host usando '!poderes'.",
  ];

  const anunCreditos = [
    "[💻] Script creado por rana (Discord: 17pxy) (Comunidad Haxball: https://discord.gg/mPxVtFfHE9).",
  ]

  const anuncios = [
    anunDisc,
    anunAyuda,
    anunCoins,
    anunTop,
    anunTroll,
    anunCoinsFree,
    anunPoderes,
    anunEstadio,
    anunCreditos
  ];

  setInterval(() => {
    const indiceAleatorio = Math.floor(Math.random() * anuncios.length);
    const arrayAleatorio = anuncios[indiceAleatorio];

    for (let i = 0; i < arrayAleatorio.length; i++) {
      const color = i == 0 ? 0x41fe3b : 0xffffff;
      const mensaje = arrayAleatorio[i];
      room.sendAnnouncement(mensaje, null, color, "small-bold", 1);
    }
  }, 30000);

  const palabras = [
    "jueganconrana",
    "ranahost",
    "pablitoclavounclavito",
    "123851xas",
    "trestristestigrestragantrigoenuntrigal",
    "jugamosconrana",
    "palarbasxas03k",
    "912kxc",
    "01dkascv",
    "abcde",
    "aeiou123456",
    "ranoso",
    "comunidadhaxball",
    "haxballelmejorjuegoq",
    "aguanteelhaxball",
  ];

  setInterval(() => {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    const palabraAleatoria = palabras[indiceAleatorio];

    if (room.getPlayerList().length < 8) {
      return false;
    }

    if (adivinaTime) {
      return false;
    } else {
      adivinaPalabra = palabraAleatoria;
      adivinaTime = true;
      sendAnnounce(
        `[👀] El primero que escriba la palabra (${palabraAleatoria}) ganará 5 coins!`,
        null,
        0x00ff98,
        "small-bold"
      );
    }
  }, 180000);

  app.listen(4001, () => {
    console.log("Servidor web iniciado en el puerto 4000");
  });

  async function checkRegister(userName) {
    let data = await statsDB.findOne({ name: userName });
    if (!data) data = false;
    return data;
  }

  async function obtenerStats(userName, userID) {
    let stats = await statsDB.findOne({ name: userName, id: userID });
    if (!stats) stats = false;
    return stats;
  }

  async function setMute(userName, userID) {
    let data = await statsDB.findOne({ name: userName });
    if (!data) return noRegistrado(userID);
    if (data.isMuted)
      return sendAnnounce(
        `${userName} ya esta muteado!`,
        userID,
        0x5ca3f7,
        "bold",
        1
      );
    -(await statsDB.findOneAndUpdate({ name: userName }, { isMuted: true }));
    sendAnnounce(
      `${userName} fue muteado correctamente!`,
      null,
      0x5ca3f7,
      "bold",
      1
    );
  }

  async function removeMute(userName, userID) {
    let data = await statsDB.findOne({ name: userName });
    if (!data) return noRegistrado(userID);
    if (!data.isMuted)
      return sendAnnounce(
        `${userName} no esta muteado!`,
        userID,
        0x5ca3f7,
        "bold",
        1
      );

    await statsDB.findOneAndUpdate({ name: userName }, { isMuted: false });
    sendAnnounce(
      `${userName} fue unmuteado correctamente!`,
      null,
      0x5ca3f7,
      "bold",
      1
    );
  }

  async function sendAnnounce(msg, user, color, style, sound) {
    if (color == null) {
      color = 0xc6e2ff;
    }
    if (style == null) {
      style = "normal";
    }
    if (sound == null) {
      sound = 0;
    }
    room.sendAnnouncement(msg, user, color, style, sound);
  }
  // Creado por rana (Discord: 17pxy)
  async function kickUser(user, razon, ban) {
    if (!isNaN(user)) return;
    room.kickPlayer(user, razon, ban);
  }

  async function sendStats(userName, userID, byName) {
    const isRegistered = await checkRegister(userName);
    if (!isRegistered) return noRegistrado(userID);

    const statsUser = await statsDB.findOne({ name: userName });
    if (!statsUser) return;
    // Creado por rana (Discord: 17pxy)
    sendAnnounce(
      `Estadisticas de ${userName} (${statsUser.id}):\n  • Partidos ❯❯ 🎯Jugados: ${statsUser.partidos}, ✅Ganados: ${statsUser.ganados}, ❌Perdidos: ${statsUser.perdidos}\n  • Individual ❯❯ ⚽Goles: ${statsUser.goles}, 👟 Asistencias: ${statsUser.asistencias}, 🤡Goles E/C: ${statsUser.golesencontra}, 💥Salvadas Epicas: ${statsUser.salvadasepicas}, 🥅Vallas: ${statsUser.vallasinvictas}\n  • Otros ❯❯ 🔝Puntos: ${statsUser.puntaje}, ✨Nivel: ${statsUser.nivel}, 🪙Coins: ${statsUser.coins}`,
      userID,
      0x41fe3b,
      "small-bold",
      1
    );
    if (byName == null) return;
    sendAnnounce(
      `${byName} vió las estadisticas de ${userName}!`,
      null,
      0xc6e2ff,
      "bold",
      1
    );
  }

  async function noRegistrado(userID) {
    sendAnnounce(
      `[⚠] Ese usuario no esta registrado en el host!`,
      userID,
      0xff0000,
      "small-bold",
      0
    );
  }

  function secondsToMinutes(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

});

client.login(config.TOKEN);