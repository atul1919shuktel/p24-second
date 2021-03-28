class Stone{
	constructor(x,y,width,height)
	{
	
	var options={
        restitution:0.8,
		friction:3,
		density:30
	}
	
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(40);
			stroke("white");
			fill("white");
			rect(this.x,this.y,this.width,this.height)
           
			pop()
	}

}