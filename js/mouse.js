var message ="javascript好好玩"
var x,y;
var step =15;
var flag = 0;
message =message.split("");


var xPoint = new Array();
for (i=0;i<=message.length-1;i++)
	xPoint[i] =-50;

var yPoint = new Array();

for (i=0;i<=message.length-1;i++)
	yPoint[i] =-50;

function show_pic()

{
	x =event.clientX;
	y =event.clientY;

}

function makeshow()
{
	for(i=message.length-1;i>=1;i--)
	{
		xPoint[i]=xPoint[i-1]+step;
		yPoint[i]=yPoint[i-1];
	}

	xPoint[0]=x+step;
	yPoint[0]=y;

	for (i = 0; i <= message.length-1; i++) 
	{
		var mySpan =eval("span"+(i)+".style");
		mySpan.posLeft=xPoint[i];
		mySpan.posTop=yPoint[i];
		mySpan.color=Math.random()*255*255*255+Math.random()*255*255+Math.random()*255;

	}


	window.setTimeout("makeshow();",2);
}
for (var i = 0; i <= message.length-1; i++) 
{
	document.write("<span id='span"+i+"'class='textstyle'><b>");
	document.write(message[i]);
	document.write("</b></span>");

}