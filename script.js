
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


/*если хочешь удалить - используюй splice
еще лучше - добавить в класс массива свою функцию
Array.prototype.removeAt = function (index) {
  this.splice(index,1);
};
*/


var task,TaskCollection = [],j=0,i=0;


/*ФУНКЦИЯ СОЗДАНИЯ ЗАДАЧИ, ВОЗВРАЩАЕТ ЗАДАЧУ*/
function createTask(){
	var task,tittle;
	tittle = document.getElementById("taskTittle").value;
	task = new Task(tittle);
	return task;
}

/*ДОБАВЛЕНИЕ ЗАДАЧИ В СПИСОК ЗАДАЧ*/	
function addTask(task){
	TaskCollection[i]={
		name:task.name
	}
	i=i+1;
	console.log(TaskCollection);
}


/* ФУНКЦИЯ СОЗДАНИЕ ЗАДАЧИ И ДОБАВЛЕНИЕ В СПИСОК ЗАДАЧ*/
function clickButtonAdd(){
	task=createTask();
	addTask(task);
}	




/*	delete TaskCollection[j];
	console.log(TaskCollection);
	j=j+1;
}
*/