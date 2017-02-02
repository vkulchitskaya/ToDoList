
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
var task = new Task("Текст задачи");


/*ПО НАЖАТИЮ КНОПКИ НАДО СОЗДАТЬ ЭКЗЕМЛЯР ЗАДАЧИ, И ЗАСУНУТЬ ЕГО В КОЛЛЕКЦИЮ ЗАДАЧ
НО ПОКА ЗДЕСЬ ПРОСТО ДИАЛОГОВОЕ ОКНО*/
function AddTask(){
	alert( "Здесь могла бы быть Ваша задача" );
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


	
console.log(task);
console.log(TaskCollection);


