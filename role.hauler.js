module.exports = {
 
    run: function(creep) {
    
    creep.eCheck()
    
    if(creep.memory.eCheck == false) { 
        
        creep.convenientWithdraw();
    }
    else{
        const target = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: s => (s.structureType == STRUCTURE_SPAWN || s.structureType == STRUCTURE_EXTENSION) 
        && s.store[RESOURCE_ENERGY] < s.store.getCapacity()
    });
        
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
 
        }
    } 
    }
}

