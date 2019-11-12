$(document).ready(function(){
    menuClick();
	tabChange();

	var ctx = document.getElementById('myChart').getContext('2d');
	var myLineChart = new Chart(ctx, {
		type: 'line',
		data: {
			label: '',
			labels: ['6:00', '6:30', '7:00', '7:30', '8:00', '8:30','9:00', '9:30', '10:00', '10:30', '11:00', '11:30'],
			datasets: [{
				data: [-10, 10, 0, -5, 10, 15,-20,-10, 10, 0, -5, 10, 15,-20,],
				borderColor: "white",
				backgroundColor: 'rgb(255, 99, 132)',
				borderWidth: 3,
				fill:false, // line의 아래쪽을 색칠할 것인가? 
				lineTension:0.1, // 값을 높이면, line의 장력이 커짐.
			}],
			
		},
		options: {
			legend:"",
			fill:false,
			scales: {
				yAxes: [{
					stacked: false
				}]
			}
		}
    });
    
    $("#aircleaner_power").click(function(){
		
		$.ajax({
		url: '/aircleanercontrol/power',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
			$("#display_power").text("ON");
		},
		error: function(err){
			throw(err);
		}
		});
});
	
$("#aircleaner_speedup").click(function(){
		
		$.ajax({
		url: '/aircleanercontrol/speedup',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});
	

$("#aircleaner_speeddown").click(function(){
		
		$.ajax({
		url: '/aircleanercontrol/speeddown',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});
//공기 청정기

//가습기
$("#humidifier_power").click(function(){
		
		$.ajax({
		url: '/humidifiercontrol/power',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});
	
$("#humidifier_speedup").click(function(){
		
		$.ajax({
		url: '/humidifiercontrol/speedup',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});
	

$("#humidifier_speeddown").click(function(){
		
		$.ajax({
		url: '/humidifiercontrol/speeddown',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});
//가습기

//에어컨
$("#airconditioner_power").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/power',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});
	
$("#airconditioner_cold").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/cold',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
			$("#display_mode").text("냉방");
		},
		error: function(err){
			throw(err);
		}
		});
});
	

$("#airconditioner_warm").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/warm',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
			$("#display_mode").text("난방");
		},
		error: function(err){
			throw(err);
		}
		});
});

$("#airconditioner_dehumidity").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/dehumidity',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
			$("#display_mode").text("제습");
		},
		error: function(err){
			throw(err);
		}
		});
});

$("#airconditioner_tempup").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/tempUp',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});

$("#airconditioner_tempdown").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/tempDown',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});

$("#airconditioner_speedup").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/speedup',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});

$("#airconditioner_speeddown").click(function(){
		
		$.ajax({
		url: '/airconditionercontrol/speeddown',
		async: 'true',
		type: 'POST',
		data:{
			
		},
		dataType: 'json',
		success : function(data){
		},
		error: function(err){
			throw(err);
		}
		});
});

})



function menuClick(){
	var menu = $('header .btn-menu');
	var close = $('header .btn-close');
	var logout = $('header .btn-logout');
	var remote = $('header .btn-remote');
	var mode = $('header .btn-mode');
	var main = $('header .btn-choice-mode');
	var detail_air = $('header .btn-air');
	var data = $('header .btn-data');
	var home = $('header .btn-home');
	menu.on('click' , function(){
		$('.nav').fadeIn('fast');
	})
	close.on('click' , function(){
		$('.nav').fadeOut('fast');
	});
	logout.on('click' ,function(){
		alert('로그아웃');
		location.href='/';
	})
	remote.on('click' ,function(){
		location.href='/remoteControl';
	})
	mode.on('click' ,function(){
		location.href='/modeControl';
	})

	main.on('click' ,function(){
		location.href='/main';
	})

	detail_air.on('click' ,function(){
		location.href='/detailair';
	})

	data.on('click' ,function(){
		location.href='/dataHistory';
	})
	home.on('click' ,function(){
		location.href='/main';
	})
}

function tabChange(){
	var tabList = $('.tab-list li');
	var tabItem = $('.tab-item');

	tabList.on('click' , function(){
		var idx = $(this).index();
		// console.log( tabItem.eq(idx))
		$(this).addClass('active').siblings().removeClass('active');
		tabItem.removeClass('active')
		tabItem.eq(idx).addClass('active')

	})
}

function myFunction() {
	let input, filter, ul, li, a, i
	input = document.getElementById("mySearch")
	filter = input.value.toUpperCase()
	ul = document.getElementById("myMenu")
	li = ul.getElementsByTagName("li")
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0]
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = ""
		} else {
			li[i].style.display = "none"
		}
	}
}

