function roomStrucs (room){
 
    let toRepairStrucs = room.find(FIND_STRUCTURES, {
        filter: s => s.structureType != STRUCTURE_RAMPART 
        && s.hits < s.hitsMax
    });

    room.memory.toRepairStrucs = toRepairStrucs.length;
    
    let consSites = creep.room.find(FIND_CONSTRUCTION_SITES)
    room.memory.consSites = consSites.length;
}

module.exports = roomStrucs;