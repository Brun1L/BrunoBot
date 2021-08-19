function bodyGenerator(room) {
   
    const energy = room.energyCapacityAvailable;
    room.memory.energyCapacityAvailable = energy;
    
    var numberOfParts = Math.floor(energy / 250);
    
    numberOfParts = Math.min(numberOfParts, Math.floor(30 / 4));
        // make sure the creep is not too big (more than 50 parts)
        global.rBody = [];
        for (let i = 0; i < numberOfParts; i++) {
             global.rBody.push(WORK,CARRY,MOVE,MOVE);
        }
 
}
module.exports = bodyGenerator;