function eStructures (room){

    let containers = room.find(FIND_STRUCTURES, {
        filter: s => (s.structureType == STRUCTURE_CONTAINER)
    });

    let miningContainer1
    let miningContainer2
    let upgradingContainer


    for (let container of containers) {


        if (!miningContainer1 && container != miningContainer2 && container.pos.getRangeTo(source1) <= 1) {

            sourceContainer1 = container
            continue
        }
    }
}