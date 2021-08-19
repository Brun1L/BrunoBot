function harvestingManager(room) {

var HaulersInRoom = room.find(FIND_MY_CREEPS, {
    filter: (c) => c.memory.role == 'hauler' 

})
room.memory.HaulersInRoom = HaulersInRoom.length;
console.log(room.memory.HaulersInRoom = HaulersInRoom.length)


}


module.exports = harvestingManager;