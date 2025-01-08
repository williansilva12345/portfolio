document.getElementById("radio1").checked =true;

var cont  = 1 

	setInterval(function(){
		
		next()
		
		
	},2000)
	
	function next(){
		
		cont++
		if(cont > 4){
			cont = 1 
		}
		
		document.getElementById("radio"+ cont).checked = true;
		
	}