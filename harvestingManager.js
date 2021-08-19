function harvestingManager(room) {
    
    var HarvestersInRoom = room.find(FIND_MY_CREEPS, {
                filter: (c) => c.memory.role == 'harvester'
        
    })
    room.memory.HarvestersInRoom = HarvestersInRoom.length;
    console.log(room.memory.HarvestersInRoom = HarvestersInRoom.length)
    
    var sources = room.find(FIND_SOURCES)
    room.memory.source1 = sources[0].id
    room.memory.source2 = sources[1].id
}

module.exports = harvestingManager;