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
		self=this;
		var existCollection = localStorage.getItem("collection");
		if (existCollection!=null || existCollection!=undefined){
			var reCollection = JSON.parse(existCollection);
			reCollection.taskCollection.forEach( function(item){
				var oldTask = new Task(item.name);	
		 		self.taskCollection.push(oldTask);
			} );
		}
	}
	addTask(task){
		this.taskCollection.push(task);
		console.log(this.taskCollection); 
	}
	removeTask(task) {
		this.removeTaskByName(task.name);
	}
	removeTaskByName(name) {			
		var i = this.taskCollection.indexOf(name);
		if (i != -1){
			this.taskCollection.splice(i, 1);
		}
		else
		{
			alert('Задача не найдена :(');
		}
		/* // начиная с позиции 1, удалить 1 элемент*/
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
		this.idField=qs(idField);
		self=this;
		this.idButton.onclick = function (){			
			self.onKeyPressed();
		}

		}

		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		getValue(){
			return this.idField.value;
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
		self=this;/*что за бред*/	
	}

	onKeyPressed(){	
		var task = new Task (this.view.getValue());
		this.taskCollection.addTask(task);
		var commitTaskCollection = JSON.stringify(this.taskCollection);
		localStorage.setItem('collection', commitTaskCollection);
		
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
console.log(application.taskCollection);
};

/*********************************************/