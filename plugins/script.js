var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var tbody = $("tbody")
		
setInterval(function(){
	var date = new Date()
	var year = date.getFullYear()
	var month = date.getMonth()
	var day = date.getDay()
	var tempDate = new Date(year, month)
	var monthStartDay = tempDate.getDay()
	var totalDays = new Date(year, month+1,0)
	totalDays = totalDays.getDate()
			
	tbody.children().remove()
			
	for (i=1; i<=6; i++){
		var tr = $("<tr></tr>")
				
		for (k=1; k<=7; k++){
			var td = $("<td></td>").text("")
			tr.append(td)
		}
				
		tbody.append(tr)
	}
			
	var count = 1
				
	for (i = monthStartDay; i <= totalDays + monthStartDay - 1; i++){
		$("tbody td").eq(i).text(count++)
	}
				
	$("tbody td")
		.eq(date.getDate() + monthStartDay-1)
		.addClass("today")
				
	for(i=5; i>=4; i--){
		var td = tbody.find("tr").eq(i).children()
				
		if (td.eq(0).text() == ""){
			td.parent().remove()
		}
				
	}
				
					
	var tableCaption = document.querySelector("caption")
	tableCaption.textContent = dayNames[day] + ", " + date.getDate() + " " + monthNames[month] + " " + year
}, 500)

$("#theme").change(function(e){
	var theme
	theme = $(this).val()
			
	$("table").attr("class", theme)
})