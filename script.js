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
	addTask(task){
		this.taskCollection.push(task); 
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
/*END MODEL.JS******************************************/



/*VIEW.JS***********************************************/
class View{
	
	constructor(idField,idButton,idButtonDis,idUl/*,taskCollection*/){
		this.idField=getElem(idField);
		this.idButton=getElem(idButton);
		this.idButtonDis=getElem(idButtonDis);
		this.idFieldValue=getElem(idField).value;
		this.idUl=getElem(idUl);	
		this.StrIdField=idField;
		}
		
		
}
/* END VIEW.JS**********************************/


/*HELPERS.JS***********************************/

function getElem(id)
		{
			return document.getElementById(id);
		}		
/*END HELPERS.JS********************************/


/*CONTROLLER.JS*********************************/
class Controller{
	constructor(view,taskCollection){
		this.view = view;
		this.taskCollection = taskCollection;
		this.view.idButton.onclick = function(){
			self=this
			var fieldValue = getElem(view.StrIdField).value;
			var task = new Task(fieldValue);
			taskCollection.addTask(task);
			console.log(taskCollection);
		}
		this.view.idButtonDis.onclick = function(){
		}     
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
console.log(application);
};

/*********************************************/
