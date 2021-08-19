var roleHarvester = require('role.harvester');
var roleHauler = require('role.hauler');
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

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            roleHauler.run(creep);
        }
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