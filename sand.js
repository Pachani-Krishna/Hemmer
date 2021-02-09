
var sand_option = {
restitution:1.3,
friction:5,
density:1    
}    
sand = Bodies.circle(300,600,10,sand_option)
World.add(world,sand)



ellipseMode(RADIUS)
fill ("brown")
strokeWeight(5)
stroke("red")
ellipse(sand.position.x,sand.position.y,20)    
