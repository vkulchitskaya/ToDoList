
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


class View{
	constructor(idField,idButton,idDiv){
		this.fieldValue= document.getElementById(idField).value; /*работает */
	}
	display(taskCollection){
	
	/* НЕ РАЗОБРАЛАСЬ В ЭТОМ МЕТОДЕ РЕШИЛА НАПИСАТЬ ПО-СВОЕМУ*/

	    /*тут отрисовывается коллекция в пустом div*/
	    /*var tasks = taskCollection.getTasks();
 	    tasks.forEach(function(item, i, arr) {
		    })*/
		
    /*ЗАРАБОТАЛО, НО МНЕ НЕ НРАВИТСЯ КОНСТУРКЦИЯ*/
   		
   		for (var i = 0; i < taskCollection.taskCollection.length; i++) {
   			var newLi = document.createElement('li');
   			newLi.innerHTML =taskCollection.taskCollection[i].name;
			listTask.appendChild(newLi);

		}

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
	
	


var taskCollection = new TaskCollection();

function clickButtonAdd(){
	var view = new View('taskTittle','addButton','listTask');
	var task = new Task(view.fieldValue);
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
	var view = new View('taskTittle','addButton','listTask');
	view.display(taskCollection);
}