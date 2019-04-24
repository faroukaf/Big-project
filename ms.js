// 'fram' is id of iframe
var result=0,move=0;
var q=['ml_q_0.html','ml_q_1.html','ml_q_2.html','ml_q_3.html','ml_q_4.html','ml_q_5.html','ml_q_6.html','ml_q_7.html','ml_q_8.html','ml_q_9.html'];
var a=['ml_a_0.html','ml_a_1.html','ml_a_2.html','ml_a_3.html','ml_a_4.html','ml_a_5.html','ml_a_6.html','ml_a_7.html','ml_a_8.html','ml_a_9.html'];



function next(){
	if(move<q.length-1){
		document.getElementById('fram').src=q[++move];
	}
}

function previous(){
	if(move>0){
		document.getElementById('fram').src=q[--move];
	}
}

function answer(){
	thiss=document.getElementByID('answer');
	if(thiss.innerHTML=='Answer'){
		document.getElementById('fram').src=a[move];
		thiss.innerHTML='Back';
	}
	else if(thiss.innerHTML=='Back'){
		document.getElementById('fram').src=q[move];
		thiss.innerHTML='Answer';
	}
}




function switch_style() {
	if (document.getElementById('style').getAttribute('href')=='steel1.css'){
		document.getElementById('style').href='style2.css'
		document.getElementById('fram').contentWindow.document.getElementsByTagName('link')[0].href='style2.css'
	}
	else{
		document.getElementById('style').href='steel1.css'
		document.getElementById('fram').contentWindow.document.getElementsByTagName('link')[0].href='steel1.css'
	}
}


function test() {
	let r=document.getElementById('fram');
	let rr=r.contentWindow.document.getElementsByTagName('input');
	console.log(rr[1].checked)
}