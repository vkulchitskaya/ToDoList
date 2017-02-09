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
	constructor(idField,idButton,idButtonDis,idUl){
		this.idField=document.getElementById(idField);
		this.idButton=document.getElementById(idButton);
		this.idButtonDis=document.getElementById(idButtonDis);
		this.idUl=document.getElementById(idUl);
		this.idButton.onclick = function(){
			var fieldValue = document.getElementById(idField).value;
			var task = new Task(fieldValue);
			/*нажатие кнопки создает задачу, но не знаю, как положить эту задачу в коллекцию*/
			/*application.taskCollection.addTask(task);*/
		}
		}
}

class Application{
	constructor(){
		this.taskCollection = new TaskCollection();
		this.view = new View('taskTittle','addButton','displayButton','listTask');		
	}
}


window.onload = function(){
var application = new Application();
console.log(application);
};