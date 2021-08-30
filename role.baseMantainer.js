module.exports = {
  
    run: function(creep) {

        creep.eCheck();

        if(creep.memory.eCheck == false) {
            creep.convenientWithdraw()

            
        } else {
            let toRepairStrucs = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: s => s.structureType != STRUCTURE_RAMPART 
                && s.hits < s.hitsMax / 2
            });

            if(creep.repair(toRepairStrucs) == ERR_NOT_IN_RANGE) {
                creep.moveTo(toRepairStrucs);
            }
            creep.say("🔨")
        }
        
    }
} 