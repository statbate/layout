var mobile = false;
var income_chart = false;

window.addEventListener("resize", function() {
	if(window.innerWidth > 805){
		if(mobile){
			mobile = false;
			$(".icon-menu").removeClass("_active");
			$(".header_mobile_nav").hide();
		}
		if(!income_chart){
			showStat();
		}
	}
});

function choose() {
	if(mobile) {
		$(".icon-menu").removeClass("_active");
		$(".header_mobile_nav").hide();
		mobile = false;
		return;
	}
	$(".icon-menu").addClass("_active");
	$(".header_mobile_nav").show();
	mobile = true;
}

function showStat() {
	if(window.innerWidth < 805){
		return;
	}
	income_chart = true;
	var hcData = [[{"date":"2023-04-15","value":611401},{"date":"2023-04-16","value":542622},{"date":"2023-04-17","value":508451},{"date":"2023-04-18","value":448885},{"date":"2023-04-19","value":449757},{"date":"2023-04-20","value":478368},{"date":"2023-04-21","value":556165},{"date":"2023-04-22","value":594264},{"date":"2023-04-23","value":556086},{"date":"2023-04-24","value":472581},{"date":"2023-04-25","value":473237},{"date":"2023-04-26","value":452373},{"date":"2023-04-27","value":498521},{"date":"2023-04-28","value":611532},{"date":"2023-04-29","value":603044},{"date":"2023-04-30","value":585702},{"date":"2023-05-01","value":529474},{"date":"2023-05-02","value":458794},{"date":"2023-05-03","value":501437},{"date":"2023-05-04","value":475846},{"date":"2023-05-05","value":533249},{"date":"2023-05-06","value":555556},{"date":"2023-05-07","value":536512},{"date":"2023-05-08","value":476952},{"date":"2023-05-09","value":473070},{"date":"2023-05-10","value":482595},{"date":"2023-05-11","value":467818},{"date":"2023-05-12","value":547682},{"date":"2023-05-13","value":563308},{"date":"2023-05-14","value":564947},{"date":"2023-05-15","value":511957},{"date":"2023-05-16","value":465036},{"date":"2023-05-17","value":470769},{"date":"2023-05-18","value":487401},{"date":"2023-05-19","value":500960},{"date":"2023-05-20","value":444352},{"date":"2023-05-21","value":566856},{"date":"2023-05-22","value":479135},{"date":"2023-05-23","value":455659},{"date":"2023-05-24","value":441327},{"date":"2023-05-25","value":454033},{"date":"2023-05-26","value":490206},{"date":"2023-05-27","value":514307},{"date":"2023-05-28","value":508170},{"date":"2023-05-29","value":513296},{"date":"2023-05-30","value":476432},{"date":"2023-05-31","value":586540},{"date":"2023-06-01","value":578479},{"date":"2023-06-02","value":628258},{"date":"2023-06-03","value":716208},{"date":"2023-06-04","value":695595},{"date":"2023-06-05","value":521118},{"date":"2023-06-06","value":524064},{"date":"2023-06-07","value":538274},{"date":"2023-06-08","value":571806},{"date":"2023-06-09","value":589876},{"date":"2023-06-10","value":654360},{"date":"2023-06-11","value":669770},{"date":"2023-06-12","value":568407},{"date":"2023-06-13","value":538083},{"date":"2023-06-14","value":240397}],[{"date":"2023-04-15","value":825870},{"date":"2023-04-16","value":752896},{"date":"2023-04-17","value":677303},{"date":"2023-04-18","value":602592},{"date":"2023-04-19","value":608448},{"date":"2023-04-20","value":636208},{"date":"2023-04-21","value":732764},{"date":"2023-04-22","value":794373},{"date":"2023-04-23","value":763830},{"date":"2023-04-24","value":627110},{"date":"2023-04-25","value":627214},{"date":"2023-04-26","value":597290},{"date":"2023-04-27","value":663497},{"date":"2023-04-28","value":792787},{"date":"2023-04-29","value":803355},{"date":"2023-04-30","value":798347},{"date":"2023-05-01","value":712626},{"date":"2023-05-02","value":612538},{"date":"2023-05-03","value":651328},{"date":"2023-05-04","value":628044},{"date":"2023-05-05","value":704011},{"date":"2023-05-06","value":744721},{"date":"2023-05-07","value":723472},{"date":"2023-05-08","value":642650},{"date":"2023-05-09","value":622403},{"date":"2023-05-10","value":630316},{"date":"2023-05-11","value":623568},{"date":"2023-05-12","value":707595},{"date":"2023-05-13","value":768155},{"date":"2023-05-14","value":747945},{"date":"2023-05-15","value":675697},{"date":"2023-05-16","value":612555},{"date":"2023-05-17","value":614103},{"date":"2023-05-18","value":639054},{"date":"2023-05-19","value":651719},{"date":"2023-05-20","value":600948},{"date":"2023-05-21","value":753067},{"date":"2023-05-22","value":634702},{"date":"2023-05-23","value":600097},{"date":"2023-05-24","value":588924},{"date":"2023-05-25","value":613074},{"date":"2023-05-26","value":637395},{"date":"2023-05-27","value":684562},{"date":"2023-05-28","value":673938},{"date":"2023-05-29","value":681694},{"date":"2023-05-30","value":638914},{"date":"2023-05-31","value":770956},{"date":"2023-06-01","value":775108},{"date":"2023-06-02","value":842605},{"date":"2023-06-03","value":969958},{"date":"2023-06-04","value":945070},{"date":"2023-06-05","value":701636},{"date":"2023-06-06","value":705509},{"date":"2023-06-07","value":724719},{"date":"2023-06-08","value":764781},{"date":"2023-06-09","value":797942},{"date":"2023-06-10","value":884101},{"date":"2023-06-11","value":913266},{"date":"2023-06-12","value":765003},{"date":"2023-06-13","value":726132},{"date":"2023-06-14","value":319781}],[{"date":"2023-04-15","value":214469},{"date":"2023-04-16","value":210274},{"date":"2023-04-17","value":168852},{"date":"2023-04-18","value":153707},{"date":"2023-04-19","value":158691},{"date":"2023-04-20","value":157840},{"date":"2023-04-21","value":176599},{"date":"2023-04-22","value":200109},{"date":"2023-04-23","value":207744},{"date":"2023-04-24","value":154529},{"date":"2023-04-25","value":153977},{"date":"2023-04-26","value":144917},{"date":"2023-04-27","value":164976},{"date":"2023-04-28","value":181255},{"date":"2023-04-29","value":200311},{"date":"2023-04-30","value":212645},{"date":"2023-05-01","value":183152},{"date":"2023-05-02","value":153744},{"date":"2023-05-03","value":149891},{"date":"2023-05-04","value":152198},{"date":"2023-05-05","value":170762},{"date":"2023-05-06","value":189165},{"date":"2023-05-07","value":186960},{"date":"2023-05-08","value":165698},{"date":"2023-05-09","value":149333},{"date":"2023-05-10","value":147721},{"date":"2023-05-11","value":155750},{"date":"2023-05-12","value":159913},{"date":"2023-05-13","value":204847},{"date":"2023-05-14","value":182998},{"date":"2023-05-15","value":163740},{"date":"2023-05-16","value":147519},{"date":"2023-05-17","value":143334},{"date":"2023-05-18","value":151653},{"date":"2023-05-19","value":150759},{"date":"2023-05-20","value":156596},{"date":"2023-05-21","value":186211},{"date":"2023-05-22","value":155567},{"date":"2023-05-23","value":144438},{"date":"2023-05-24","value":147597},{"date":"2023-05-25","value":159041},{"date":"2023-05-26","value":147189},{"date":"2023-05-27","value":170255},{"date":"2023-05-28","value":165768},{"date":"2023-05-29","value":168398},{"date":"2023-05-30","value":162482},{"date":"2023-05-31","value":184416},{"date":"2023-06-01","value":196629},{"date":"2023-06-02","value":214347},{"date":"2023-06-03","value":253750},{"date":"2023-06-04","value":249475},{"date":"2023-06-05","value":180518},{"date":"2023-06-06","value":181445},{"date":"2023-06-07","value":186445},{"date":"2023-06-08","value":192975},{"date":"2023-06-09","value":208066},{"date":"2023-06-10","value":229741},{"date":"2023-06-11","value":243496},{"date":"2023-06-12","value":196596},{"date":"2023-06-13","value":188049},{"date":"2023-06-14","value":79384}]];
	var data = [];
	for (var i = 0; i < hcData.length; i++) {
		//hcData[i] = hcData[i].slice(1, hcData[i].length); // remove first day
		data[i] = MG.convert.date(hcData[i], 'date');
	}
	MG.data_graphic({
		title: false,
		data: data,
		full_width: true,
		full_height: true,
		//bottom: 32,
		right: 36,
		// x_axis: screen.width >= 568,
		top: 0,
		target: '.income_chart',
		x_accessor: 'date',
		y_accessor: 'value',
		color: ['green', '#25639a', 'brown'],
		legend: ['Girls', 'All', 'Other',],
		area: [false, true, false],
	});
}

function printWsText(text) {
	if ($('.wstext').length == 0 || text.length == 0) {
		return;
	}
	date = new Date();
	xMin = (date.getUTCMinutes() < 10 ? '0' : '') + date.getUTCMinutes()
	xSec = (date.getUTCSeconds() < 10 ? '0' : '') + date.getUTCSeconds()
	time = date.getUTCHours() + ":" + xMin + ":" + xSec;

	message = text;
	
	console.log(mobile);
	
	if(window.innerWidth > 805){
		message = '[' + time + '] ' + message;
	}
	
	message = '<div class="message">' + message + '</div>'

	if(msgs.arr.length > 64) {
		msgs.arr.pop()
	}
	msgs.arr.unshift(message)
	document.querySelector('.wstext').innerHTML = msgs.arr.join('');
}

function statbate() {
	var ws = new WebSocket("wss://statbate.com/ws/");
	
	ws.onopen = function () {
		printWsText('Socket is open. Here is the log of big tips.');
		console.log('websocket open');
		ws.send("chaturbate");
	};
	
	window.onbeforeunload = function() {
		ws.onclose = function () {}; // disable onclose handler first
		ws.close(1000);
	};
  
	ws.onclose = function (e) {
		printWsText('Socket is closed. Reconnect will be attempted in 1 second.');
		console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.code);
		setTimeout(function () {
			statbate();
		}, 1000);
		return;
	};
	
	ws.onmessage = function (e) {
		if(e.data == "ping") {
			ws.send("pong");
			return;
		}
		j = JSON.parse(e.data);
		if (j.count) {
			$(".trackCount").text("track " + j.count + " rooms");
			return;
		}
		if(typeof chartActivity !== "undefined" && chartActivity && j.index){
			point = chartActivity.series[0].points[0];
			if(j.index < 10)
				point.update(parseFloat(j.index.toFixed(2)));
			else
				point.update(Math.round(j.index));
			return;
		}
		if(j.donator){
			text = "<a href='/l/" + j.donator + "' rel='nofollow' target='_blank'>" + j.donator + "</a> send " + j.amount + " tokens to <a href='/l/" + j.room + "' rel='nofollow' target='_blank'>" + j.room + "</a>";
			if (j.amount > 499) {
				text = '<font color="#ae8d0b"><b>' + text + '</b></font>';
			}
			printWsText(text);
			return;
		}
	};
}

msgs = {
	arr: [],
}

statbate();
showStat();

console.log('Debug https://statbate.com/debug.php');
console.log('Statbate is open source project (https://github.com/statbate)');
