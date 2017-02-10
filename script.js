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



class View{
	
	constructor(idField,idButton,idButtonDis,idUl/*,taskCollection*/){
		this.idField=document.getElementById(idField);
		this.idButton=document.getElementById(idButton);
		this.idButtonDis=document.getElementById(idButtonDis);
		this.idFieldValue=document.getElementById(idField).value;
		this.idUl=document.getElementById(idUl);
		this.idButton.onclick = function(){
			var fieldValue = document.getElementById(idField).value;
			var task = new Task(fieldValue);
			/*taskCollection.addTask(task);*/}
		this.idButtonDis.onclick = function(){
			/*console.log(taskCollection);*/}
		}
		getFieldValue(){
			return document.getElementById(idField).value;
		}
}

class Application{
	constructor(){
		this.taskCollection = new TaskCollection();
		this.view = new View('taskTittle','addButton','displayButton','listTask');
		this.controller = new Controller(this.view,this.taskCollection);
	}
}

class Controller{
	constructor(view,taskCollection){
		}
	}


window.onload = function(){

var application = new Application();
console.log(application);

};



