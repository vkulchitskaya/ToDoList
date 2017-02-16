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
			reCollection.forEach( function(item){
				var oldTask = new Task(item.name);	
		 		self.taskCollection.push(oldTask);
			} );
		}
	}
	addTask(task){
		this.taskCollection.push(task);		
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

	rewrite(){
		var commitTaskCollection = JSON.stringify(this.taskCollection);
		localStorage.setItem('collection', commitTaskCollection);
	}
}
/*END MODEL.JS*******************************************/



/*VIEW.JS***********************************************/
class View{
	
	constructor(idField,idButton,idButtonDis,idUl){
		this.idButton=qs(idButton);
		this.idButtonDis=qs(idButtonDis);
		this.idField=qs(idField);
		this.idUl= qs(idUl);
		self=this;
		this.idButton.onclick = function (){			
			self.onKeyPressed();
		}
		this.idButtonDis.onclick= function (taskCollection){
			self.onKeyDisPressed();
		}
		}
		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		bindButtonDisPressed (handler){
			this.onKeyDisPressed = handler;
		}
		getValue(){
			return this.idField.value;
		}
		display(taskCollection){
	    	var tasks = taskCollection.getTasks();
	    	self = this
 	    	tasks.forEach(function (item) {
				var newLi = document.createElement('li');
   				newLi.innerHTML =item.name;
   				self.idUl.appendChild(newLi);

		});		
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
		this.view.bindButtonPressed(this.onKeyPressed.bind(this));
		this.view.bindButtonDisPressed(this.onKeyDisPressed.bind(this));
	}

	onKeyPressed(){	
		var task = new Task (this.view.getValue());
		this.taskCollection.addTask(task);
		this.taskCollection.rewrite();
		
		
	}
	onKeyDisPressed(){
		var elem = this.view.idUl;
		while (elem.firstChild) {
    	elem.removeChild(elem.firstChild);
		}
		
		this.view.display(this.taskCollection);	
		/*console.log(this.view); */

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
/*localStorage.clear();*/
var application = new Application();
console.log(application.taskCollection);

};

/*********************************************/