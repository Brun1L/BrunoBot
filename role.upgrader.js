module.exports = {
 
    run: function(creep) {

        creep.eCheck();

        if(creep.memory.eCheck == false) {
            let droppedE = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                filter: (s) => s.resourceType == RESOURCE_ENERGY
            })
            
            if(creep.pickup(droppedE) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(droppedE, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else{
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
}    