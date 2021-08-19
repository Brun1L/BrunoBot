function spawning(room) {

    var h1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.targetedSource == room.memory.source1);
    var hl = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
    
    if(h1.length < 1) {
        var newName = 'h1' + Game.time;
        console.log('h1Required');
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,MOVE], newName, 
            {memory: {role: 'harvester', home: room.name, targetedSource: room.memory.source1}});       
        }    

    let otherCreepsAvToSpawn = false;
    if(h1.length == 1) {
        otherCreepsAvToSpawn = true;
    }

    if(otherCreepsAvToSpawn == true) {
        if(hl.length < 1) {
        var newName = 'hl' + Game.time;
        console.log('hlRequired');
        Game.spawns['Spawn1'].spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY], newName, 
            {memory: {role: 'hauler', home: room.name, hauling: false}});       
        }  
    }    
}



module.exports = spawning;