function spawningManager(room) {

const hs = room.memory.HarvestersInRoom;

let harvestersNeeded = false;
if(hs.length = 2) {
    harvestersNeeded = true;
}
room.memory.harvestersNeeded = harvestersNeeded;
}

module.exports = spawningManager;