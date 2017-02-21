class Controller{
	constructor(view,taskCollection){
		this.view = view;
		this.taskCollection = taskCollection;
		this.view.bindButtonPressed(this.onKeyPressed);
	}

	onKeyPressed(){		
		var task = new Task (this.view.getValue());
		this.taskCollection.taskCollection.push(task);
		console.log(this.taskCollection);		

	}

}