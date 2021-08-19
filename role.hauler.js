module.exports = {
 
    run: function(creep) {
    
  
    let droppedE = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
            filter: (s) => s.resourceType == RESOURCE_ENERGY
        })
    
    creep.eCheck()
    
        
    if(creep.memory.eCheck == false) {    
        
        if(creep.pickup(droppedE) == ERR_NOT_IN_RANGE) {
                creep.moveTo(droppedE, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
    else{
        let structure = creep.room.find(FIND_MY_STRUCTURES, {
        filter: s => (s.structureType == STRUCTURE_SPAWN && s.store.getUsedCapacity() < s.store.getCapacity()) 
})
    
    } 
}
}

