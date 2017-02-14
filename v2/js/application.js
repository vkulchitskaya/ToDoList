class Application{
	constructor(){
		this.taskCollection = new TaskCollection();
		this.view = new View('taskTittle','addButton','displayButton','listTask');
		this.controller = new Controller(this.view,this.taskCollection);

	}

}

window.onload = function(){
var application = new Application();
/*console.log(application);*/
};
