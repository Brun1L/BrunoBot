function roomStrucs (room){
 
    let toRepairStrucs = room.find(FIND_STRUCTURES, {
        filter: s => s.structureType != STRUCTURE_RAMPART 
        && s.hits < s.hitsMax / 2
    });

    room.memory.toRepairStrucs = toRepairStrucs.length;
    
    let consSites = room.find(FIND_CONSTRUCTION_SITES)
    room.memory.consSites = consSites.length;
    
    let roads = room.find(FIND_STRUCTURES, {
        filter: s => s.structureType == STRUCTURE_ROAD

    });

    let containers = room.find(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_CONTAINER
            });
            
            let uContainer
            
            for(let container of containers) {
                if(container.pos.getRangeTo(creep.room.controller) <= 2) {
                    uContainer = container;
                }
            }
            
    room.memory.uContainer = uContainer.id;    
}

module.exports = roomStrucs;