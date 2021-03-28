class Wood{
	constructor(x,y,width,height)
	{
	
	var options={
        restitution:0.8,
		friction:0.9,
		density:1.5
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
			var woodpos=this.body.position;		
			push()
			translate(woodpos.x, woodpos.y);
			rectMode(CENTER)
			strokeWeight(40);
			stroke("brown");
			fill("brown");
			rect(this.x,this.y,this.width,this.height)
           
			pop()
	}

}