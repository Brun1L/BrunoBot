Creep.prototype.eCheck = function() {
    creep = this;

    if (creep.store.getUsedCapacity() == 0) {

        creep.memory.eCheck = false

    } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {

        creep.memory.eCheck = true
    }
}

Creep.prototype.convenientWithdraw = function() {
    
    creep = this;
 
            let containers = creep.room.find(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_CONTAINER
            });
            
            const source1 = Game.getObjectById(creep.room.memory.source1)
            const source2 = Game.getObjectById(creep.room.memory.source2)
            
            let sourceContainer1
            let sourceContainer2
                 for (let container of containers) {
                    if (!sourceContainer1 && container != sourceContainer2 && container.pos.getRangeTo(source1) <= 1) {

                    sourceContainer1 = container
                    continue
        }
        if (!sourceContainer2 && container != sourceContainer1 && container.pos.getRangeTo(source2) <= 1) {

                    sourceContainer2 = container
                    continue
        }
            }
            if(sourceContainer1) {
                if(sourceContainer1.store.getUsedCapacity() > 0) {
                    if(creep.withdraw(sourceContainer1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sourceContainer1);
                }
            }
        } else if (sourceContainer2){
                if(sourceContainer2.store.getUsedCapacity() > 0) {
                    if(creep.withdraw(sourceContainer2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sourceContainer2);
                    }    
                }
            } else if(sourceContainer1 == undefined && sourceContainer2 == undefined) {
                let droppedE = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                    filter: s => s.resourceType == RESOURCE_ENERGY && s.amount > creep.store.getFreeCapacity()
        })
     
     if(droppedE) {   
        if(creep.pickup(droppedE) == ERR_NOT_IN_RANGE) {
                creep.moveTo(droppedE, {visualizePathStyle: {stroke: '#ffaa00'}});
                
            }
        }    
    }
}


Creep.prototype.eContainingEstrucs = function() {
    creep = this;

    
}

