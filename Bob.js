class Bob{

    constructor(x,y,radius){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.4
        }

        this.radius= radius;
        this.body= Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(4);
        fill(200,0,200);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}