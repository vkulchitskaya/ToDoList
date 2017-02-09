class TaskCollection{

	constructor() {
		this.taskCollection = [];
}
}

class View{
	constructor(idField,idButton,idButtonDis,idUl){
		this.idField=document.getElementById(idField);
		this.idButton=document.getElementById(idButton);
		this.idButtonDis=document.getElementById(idButtonDis);
		this.idUl=document.getElementById(idUl);
}
}

class Application{
	constructor(){
		this.view = new View('taskTittle','addButton','displayButton','listTask');
		this.taskCollection = new TaskCollection();
	}
}

var application = new Application();
console.log(application);