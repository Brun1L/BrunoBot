module.exports = {
 
    run: function(creep) {


        creep.eCheck();

        if(creep.memory.eCheck == false) {
            creep.convenientWithdraw();
        }
        else{
            let uContainer = Game.getObjectById(creep.room.memory.uContainer);
                if(creep.transfer(uContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(uContainer, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}    