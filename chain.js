class chain{
    constructor(bodyA,bodyB){
var chain1={
    bodyA:bodyA,bodyB:bodyB,
    stiffness:1.04,
    lenght:10
}
    
    this.chain=Constraint.create(chain1)
    World.add(world,this.chain)
}
display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    push ()
    strokeWeight(5)
    stroke("blue")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop ()
}
}
