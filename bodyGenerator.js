function bodyGenerator(room) {
   
    const energy = room.energyCapacityAvailable;
    room.memory.energyCapacityAvailable = energy;
    
    var numberOfParts = Math.floor(energy / 300);
    
    numberOfParts = Math.min(numberOfParts, Math.floor(30 / 4));
        // make sure the creep is not too big (more than 50 parts)
        global.uBody = [];
        for (let i = 0; i < numberOfParts; i++) {
             global.uBody.push(CARRY,MOVE,WORK,WORK);
        }
        
        
    var numberOfParts = Math.floor(energy / 300);
    
    numberOfParts = Math.min(numberOfParts, Math.floor(48 / 4));
        // make sure the creep is not too big (more than 50 parts)
        global.hauBody = [];
        for (let i = 0; i < numberOfParts; i++) {
             global.hauBody.push(CARRY,CARRY,MOVE,MOVE);
        }
 
}
module.exports = bodyGenerator;