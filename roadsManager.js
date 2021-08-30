function roadsManager (room) {

/*
    let spawn = room.find(FIND_MY_SPAWNS)[0]
    let origin = spawn.pos;

    let controller = room.controller
    let goal = { pos: controller.pos, range: 1 }

    let path = PathFinder.search(origin, goal, {
      plainCost: 4,
      swampCost: 10,


    let ramparts = room.find(FIND_MY_STRUCTURES, {
        filter: s => s.structureType == STRUCTURE_RAMPART
    })

    for (let rampart of ramparts) {

        cm.set(rampart.pos.x, rampart.pos.y, 4)
    }

    let roadConstructionSites = room.find(FIND_MY_CONSTRUCTION_SITES, {
        filter: s => s.structureType == STRUCTURE_ROAD
    })

    for (let roadSite of roadConstructionSites) {

        cm.set(roadSite.pos.x, roadSite.pos.y, 1)
    }

    let roads = room.find(FIND_STRUCTURES, {
        filter: s => s.structureType == STRUCTURE_ROAD
    })

    for (let road of roads) {

        cm.set(road.pos.x, road.pos.y, 1)
    }

    let constructionSites = room.find(FIND_MY_CONSTRUCTION_SITES, {
        filter: s => s.structureType != STRUCTURE_CONTAINER && s.structureType != STRUCTURE_ROAD && s.structureType != STRUCTURE_RAMPART
    })

    for (let site of constructionSites) {

        cm.set(site.pos.x, site.pos.y, 255)
    }

    let structures = room.find(FIND_STRUCTURES, {
        filter: s => s.structureType != STRUCTURE_RAMPART && s.structureType != STRUCTURE_ROAD && s.structureType != STRUCTURE_CONTAINER
    })

    for (let structure of structures) {

        cm.set(structure.pos.x, structure.pos.y, 255)
    }

    return cm
}).path

room.visual.poly(path, { stroke: colors.neutralYellow, strokeWidth: .15, opacity: .2, lineStyle: 'normal' })

for (let i = 0; i < path.length; i++) {

let value = path[i - 1]
let normalValue = path[i]

if (value && room.memory.stage >= 4) {

    room.createConstructionSite(value.x, value.y, STRUCTURE_ROAD)
}





    origin = spawn.pos;

    let source1 = Game.getObjectById(room.memory.source1)
    goal = { pos: source1.pos, range: 1 }

    path = PathFinder.search(origin, goal, }).path
      plainCost: 4,
      swampCost: 10 

room.visual.poly(path, { stroke: colors.neutralYellow, strokeWidth: .15, opacity: .2, lineStyle: 'normal' })

for (let i = 0; i < path.length; i++) {

    let value = path[i - 1]
    let normalValue = path[i]

    if (value && room.memory.stage >= 4) {

        room.createConstructionSite(value.x, value.y, STRUCTURE_ROAD)
    }
}
}


*/
}

module.exports = roadsManager;