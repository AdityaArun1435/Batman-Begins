class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
       
        this.umbrella = Bodies.circle(x,y,70,options);
        this.radius = 70;
        World.add(world, this.umbrella)
    }

    display(){
     var pos = this.umbrella.position;
      //ellipseMode(RADIUS);
     //ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}