class Controller{
	constructor(view,taskCollection){
		this.view = view;
		this.taskCollection = taskCollection;
		this.view.bindButtonPressed(this.onKeyPressed);
		self=this;
		/*console.log(self.view);*/
	}

	onKeyPressed(){
		self=this;		
		var task = new Task (self.view.getValue());
		self.taskCollection.taskCollection.push(task);
		console.log(self.taskCollection);		

	}

}