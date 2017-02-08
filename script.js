
'use strict';

/*СОЗДАЕМ КЛАСС ЗАДАЧ*/
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
	constructor(idField,idButton,idUl){
		this.idField=document.getElementById(idField);
		this.idButton=document.getElementById(idButton);
		this.idUl=document.getElementById(idUl);
	}
	display(taskCollection){
	    var tasks = taskCollection.getTasks();
	    self = this
 	    tasks.forEach(function (item) {
		var newLi = document.createElement('li');
   		newLi.innerHTML=item.name;
   		self.idUl.appendChild(newLi);
   		console.log(self.idUl);
	});		
	}
	getFieldValue(){
		var fieldValue = document.getElementById(this.idField).value;
		return fieldValue;
	}

}



function clickButtonAdd(){
	var task = new Task(view.getFieldValue());
	taskCollection.addTask(task); 
	console.log(taskCollection);
	
}


function clickButtonRemove(){
	var count =  taskCollection.taskCollection.length 
	count = count-1
	if (count > -1) taskCollection.removeTaskByName(taskCollection.taskCollection[count].name);
	console.log(taskCollection);

}


function clickButtonDisplay(){
	view.display(taskCollection);
}

var view = new View('taskTittle','addButton','listTask');
var taskCollection = new TaskCollection();
