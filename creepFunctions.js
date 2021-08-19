Creep.prototype.eCheck = function() {
    creep = this;

    if (creep.store.getUsedCapacity() == 0) {

        creep.memory.eCheck = false

    } else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {

        creep.memory.eCheck = true
    }
}