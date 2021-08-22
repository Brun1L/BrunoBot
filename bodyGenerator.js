function bodyGenerator(room) {
   
    const energy = room.energyCapacityAvailable;
    room.memory.energyCapacityAvailable = energy;
    
    var numberOfParts = Math.floor(energy / 300);
    
    numberOfParts = Math.min(numberOfParts, Math.floor(36 / 4));
        // make sure the creep is not too big (more than 50 parts)
        global.uBody = [];
        for (let i = 0; i < numberOfParts; i++) {
             global.uBody.push(CARRY,MOVE,WORK,WORK);
        }
        
        console.log(uBody)
        
    var numberOfParts = Math.floor(energy / 300);
    
    numberOfParts = Math.min(numberOfParts, Math.floor(50 / 6));
        // make sure the creep is not too big (more than 50 parts)
        global.hauBody = [];
        for (let i = 0; i < numberOfParts; i++) {
             global.hauBody.push(CARRY,CARRY,MOVE,CARRY,CARRY,MOVE);
    }
    
    
    var numberOfParts = Math.floor(energy / 250);
    
    numberOfParts = Math.min(numberOfParts, Math.floor(25 / 3));
        // make sure the creep is not too big (more than 50 parts)
        global.hBody = [];
        for (let i = 0; i < numberOfParts; i++) {
             global.hBody.push(WORK,WORK,MOVE);
    }
}
module.exports = bodyGenerator;