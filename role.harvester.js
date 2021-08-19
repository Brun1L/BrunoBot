module.exports = {
  
    run: function(creep) {
    
    const targetedSource = Game.getObjectById(creep.memory.targetedSource);
    
    if(creep.harvest(targetedSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targetedSource, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }      
}

