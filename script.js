window.onload = function(){
		function getE (a){
			return document.getElementById(a);
		}
		
		function getT (a,b){
			return document.getElementsByTagName(a) [b];
		}
		
		var abc = new XMLHttpRequest();
		
		abc.open("GET","products.json",false);
		abc.onreadystatechange = function(){
			if(abc.readyState == 4 && abc.status == 200){
				var json = eval("("+abc.responseText+")");				
				function start(){
				var tvs = "<h1>Телевізори</h1>";
				var length = json.tv.length;											
				for (var i = 0; i < length; i++){
					tvs += "<div id=products>";
					tvs += "<div class=icons><i class='fa fa-television fa-5x'></i></div>";
					tvs += "<div id=right>";
					tvs += "<h2>"+json.tv[i].name+"</h2>";
					tvs += "<p>"+json.tv[i].description+"</p>";
					tvs += "<h3>"+json.tv[i].price+"</h3>";
					tvs += "<a id="+i+"><i class='fa fa-trash-o fa-lg'></i> Delete</a>";
					tvs += "<div class=clear></div></div></div>";
				};
				getE("main").innerHTML = tvs;
				for (var j = 0; j < length; j++){
					getT("a",j).onclick = function(){
						var h = this.id;
						json.tv.splice(h,1);						
						start();
					};
				};
				};
				start();
			}
		}
		abc.send();
	}
