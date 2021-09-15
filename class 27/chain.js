class Chain {
    constructor(bodyA,bodyB){

        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            lenght : 10
        }

        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }

    show(){
       var  pointA = this.chain.bodyA.position 
    var pointB = this.chain.bodyB.position 
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}