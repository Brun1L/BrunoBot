function roadsManager (room) {


    let spawn = room.find(FIND_MY_SPAWNS)[0]
    let origin = spawn.pos;

    let controller = room.controller
    let goal = { pos: controller.pos, range: 1 }

    let path = PathFinder.search(origin, goal, {
      plainCost: 2,
      swampCost: 10,


      roomCallback: function(roomName) {

        let room = Game.rooms[roomName]

        if (!room) return false

        let cm = new PathFinder.CostMatrix

                let constructionSites = room.find(FIND_MY_CONSTRUCTION_SITES, {
                    filter: s => s.structureType != STRUCTURE_CONTAINER && s.structureType != STRUCTURE_ROAD && s.structureType != STRUCTURE_RAMPART
                })
                
                let roads = room.find(FIND_STRUCTURES, {
                    filter: s => s.structureType == STRUCTURE_ROAD

                });

                for (let road of roads) {
                    cm.set(road.pos.x, road.pos.y, 1)
                }
                
                for (let site of constructionSites) {

                    cm.set(site.pos.x, site.pos.y, 255)
                }

                let structures = room.find(FIND_STRUCTURES, {
                    filter: s => s.structureType != STRUCTURE_RAMPART && s.structureType != STRUCTURE_ROAD && s.structureType != STRUCTURE_CONTAINER
                })

                for (let structure of structures) {

                    cm.set(structure.pos.x, structure.pos.y, 255)
                }

                for (let creep of room.find(FIND_CREEPS)) {

                    cm.set(creep.pos.x, creep.pos.y, 255)
                }

        return cm
      },
    }
  ).path

 for(let position of path) {
room.createConstructionSite(position, STRUCTURE_ROAD)
}
 room.visual.poly(path, { stroke: "white", strokeWidth: .15, opacity: .2, lineStyle: 'normal' })
}

module.exports = roadsManager;