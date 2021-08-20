var spawning = require('rooms.spawning');
var spawningManager = require('spawningManager');
var bodyGenerator = require('bodyGenerator');
var harvestingManager = require('harvestingManager');
var haulingManager = require('haulingManager');
require('creepFunctions')


module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

   let roles = ['harvester', 'hauler', 'upgrader', 'builder']

roles["harvester"] = require("role.harvester")
roles["hauler"] = require("role.hauler")
roles["upgrader"] = require("role.upgrader");
roles["builder"] = require("role.builder")

for (let name in Game.creeps) {

    let creep = Game.creeps[name]

    if (roles[creep.memory.role]) roles[creep.memory.role].run(creep)
    
}    
     _.forEach(Game.rooms, function(room) {
        
       if(room.controller && room && room.controller.my) {
           spawning(room);
           bodyGenerator(room);
           harvestingManager(room);
           haulingManager(room);
           spawningManager(room);
       }

   
});   
   
}