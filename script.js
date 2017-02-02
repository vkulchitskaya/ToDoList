
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

/*СОЗДАЕМ ДЛЯ ОТЛАДКИ ЭКЗЕМЛЯР КЛАССА ЗАДАЧА, ЧТОБЫ ПОСМОТРЕТЬ, ЧТО ВСЕ ПРОСТО РАБОТАЕТ*/



/*ПО НАЖАТИЮ КНОПКИ НАДО СОЗДАТЬ ЭКЗЕМЛЯР ЗАДАЧИ, И ЗАСУНУТЬ ЕГО В КОЛЛЕКЦИЮ ЗАДАЧ
НО ПОКА ЗДЕСЬ ПРОСТО ДИАЛОГОВОЕ ОКНО*/
var Tittle,task 

function AddTask(){
	Tittle = document.getElementById("TaskTittle").value;
    task = new Task(Tittle);
	alert("Задача создалась!!!");
	console.log(task);
}


/*КОЛЛЕКЦИЯ ЗАДАЧ*/
var TaskCollection = []

/*В КОЛЛЕКЦИЮ ПОЛОЖИЛИ 2 ЭКЗЕМЛЯРА, КОТОРЫЕ БЫЛИ СОЗДАНЫ ЧЕРЕЗ КОД, А НЕ ЧЕРЕЗ КНОПКУ*/
TaskCollection[0] = {
	name:"Задача 1"
}
TaskCollection[1] = {
	name:"Задача 2"
}




