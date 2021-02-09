class Box{

constructor(x,y,width,height){
var box_option = {
restitution:0.3,
friction:5,
density:1    
}    
this.body = Bodies.rectangle(x,y,width,height,box_option)
this.width = width
this.height = height
World.add(world,this.body)
}
display(){
var angle = this.body.angle    
var pos = this.body.position;
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode (CENTER)
fill ("lightgreen")
strokeWeight(5)
stroke("green")
rect(0,0,this.width,this.height)    
pop()
}
}