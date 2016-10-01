/*
function makeborder(x){
	x.style.border = "black solid thin";
}

function noborder(x){
	x.style.border = "none";
}
*/

// function for calculate the weighted result
function getWeighted(){
	var g1, g2, g3, g4, t1, t2, t3, t4;
	g1 = document.getElementById("g1").value;
	g2 = document.getElementById("g2").value;
	g3 = document.getElementById("g3").value;
	g4 = document.getElementById("g4").value;
	t1 = document.getElementById("t1").value;
	t2 = document.getElementById("t2").value;
	t3 = document.getElementById("t3").value;
	t4 = document.getElementById("t4").value;

	var s1, s2, s3, s4;
	s1 = g1/t1;
	s2 = g2/t2;
	s3 = g3/t3;
	s4 = g4/t4;

	var p1, p2, p3, p4;
	p1 = document.getElementById("p1").value;
	p2 = document.getElementById("p2").value;
	p3 = document.getElementById("p3").value;
	p4 = document.getElementById("p4").value;

	var p;
	p = p1/1+p2/1+p3/1+p4/1;

	var wt, result;
	//result = (s1*p1 + s2*p2 + s3*p3 + s4*p4)/( p1 + p2 + p3 + p4);
	wt = s1*p1+s2*p2+s3*p3+s4*p4;
	result = (wt/p)*100;
	document.getElementById("result").innerHTML = result + " / 100";
}

// function for calculate the mean result
function getMean(){
	var g1, g2, g3, g4, t1, t2, t3, t4;
	g1 = document.getElementById("g1").value;
	g2 = document.getElementById("g2").value;
	g3 = document.getElementById("g3").value;
	g4 = document.getElementById("g4").value;
	t1 = document.getElementById("t1").value;
	t2 = document.getElementById("t2").value;
	t3 = document.getElementById("t3").value;
	t4 = document.getElementById("t4").value;
	var s1 = g1/t1;
	var s2 = g2/t2;
	var s3 = g3/t3;
	var s4 = g4/t4;

	var result;
	result = ( s1 + s2 + s3 + s4 )/4;
	document.getElementById("result").innerHTML = result;
}