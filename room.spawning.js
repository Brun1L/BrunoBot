function spawning (room) {
    
    var h1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.targetedSource == room.memory.source1);
    var hl = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
    var u = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var b = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var bM = _.filter(Game.creeps, (creep) => creep.memory.role == 'baseMantainer');
    
    if(h1.length < 1) {
        var newName = 'h1' + Game.time;
        console.log('h1Required');
        Game.spawns['Spawn1'].spawnCreep(global.hBody, newName, 
            {memory: {role: 'harvester', home: room.name, targetedSource: room.memory.source1}});       
        }    

    let otherCreepsAvToSpawn = false;
    if(h1.length == 1) {
        otherCreepsAvToSpawn = true;
    }

    if(otherCreepsAvToSpawn == true) {
        if(hl.length < 2) {
        var newName = 'hl' + Game.time;
        console.log('hlRequired');
        Game.spawns['Spawn1'].spawnCreep(global.hauBody, newName, 
            {memory: {role: 'hauler', home: room.name, hauling: false}});  

        } else{
            if(u.length < 2) {
                var newName = 'u' + Game.time;
                console.log('uRequired');
                Game.spawns['Spawn1'].spawnCreep(global.uBody, newName, 
                {memory: {role: 'upgrader', home: room.name, hauling: false}}); 
            }
            if(b.length < 1 && room.memory.consSites > 0) {
                var newName = 'b' + Game.time;
                console.log('bRequired');
                Game.spawns['Spawn1'].spawnCreep(global.uBody, newName, 
                {memory: {role: 'builder', home: room.name, hauling: false}}); 
            }
            if(bM.length < 1 && room.memory.toRepairStrucs > 0) {
                var newName = 'bm' + Game.time;
                console.log('bmRequired');
                Game.spawns['Spawn1'].spawnCreep(global.uBody, newName, 
                {memory: {role: 'baseMantainer', home: room.name, hauling: false}}); 
            }
        }
    } 
}

module.exports = spawning;