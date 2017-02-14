/*MODEL.JS***********************************/

class Task {
  constructor(name) {
    this.name = name;
  } 
  writeTask() {
    alert(this.name);
  }
}

class TaskCollection{

	constructor() {
		this.taskCollection = [];
	}
	addTask(test){
		this.taskCollection.push(task);
		console.log(this.taskCollection); 
	}
	removeTask(task) {
		this.removeTaskByName(task.name);
	}
	removeTaskByName(name) {
		var i = this.taskCollection.indexOf(name)
		this.taskCollection.splice(i, 1); // начиная с позиции 1, удалить 1 элемент
	}
	getTasks() {
		return this.taskCollection;
	}
}
/*END MODEL.JS*******************************************/



/*VIEW.JS***********************************************/
class View{
	
	constructor(idField,idButton,idButtonDis,idUl){
		this.idButton=qs(idButton);
		this.StrIdField=idField;
		self=this;
		self.idButton.onclick = function (){			
			self.onKeyPressed();
		}

		}

		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		getValue(){
			return qs(this.StrIdField).value;
		}

		
		
}
/* END VIEW.JS**********************************/


/*HELPERS.JS***********************************/

function qs(id)
		{
			return document.getElementById(id);
		}		
/*END HELPERS.JS********************************/


/*CONTROLLER.JS*********************************/
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

/*END CONTROLLER.JS*****************************/



/*НЕ ЗНАЮ К КАКОМУ ФАЙЛУ ОТНЕСТИ КОД НИЖЕ.JS****/
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

/*********************************************/
