class Chain{
    constructor(bodyA,px,py){
        var options = {
            bodyA: bodyA,
           // bodyB: bodyB,
           pointB:{x:px,y:py},
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.chain.bodyA=null;
    }
    
}