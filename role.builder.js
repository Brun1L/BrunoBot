module.exports = {
  
    run: function(creep) {

        creep.eCheck();

        if(creep.memory.eCheck == false) {

            creep.convenientWithdraw();

        } else{
            let consSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)

            if(creep.build(consSite) == ERR_NOT_IN_RANGE) {
                creep.moveTo(consSite);
            }

        }

    }
}   