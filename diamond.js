class Diamond{
	constructor(x,y,width,height)
	{
	
	var options={
        restitution:0.8,
		friction:0.9,
		density:3.5378293859392038492
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
			var diapos=this.body.position;		
			push()
			translate(diapos.x, diapos.y);
			rectMode(CENTER)
			strokeWeight(40);
			stroke("grey");
			fill("white");
			rect(this.x,this.y,this.width,this.height)
           
			pop()
	}

}