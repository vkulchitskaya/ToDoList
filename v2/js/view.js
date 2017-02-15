class View{
	
	constructor(idField,idButton,idButtonDis,idUl){
		this.idButton=qs(idButton);
		this.StrIdField=idField;
		this=self;
		this.idButton.onclick = function (){			
			self.onKeyPressed();
		}

		}

		bindButtonPressed (handler){
			this.onKeyPressed = handler;
		}
		getValue(){
			return qs(this.StrIdField).value;
		}

		
		
}