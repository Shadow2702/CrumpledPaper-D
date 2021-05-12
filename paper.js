class paper{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            density:1,
            friction:1
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        this.image=loadImage("paper.png")
        World.add(world,this.body)

    }
display() {
    push()
    
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop()
    
    }
}