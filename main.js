var width=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-70;
var mouseevent="empty";
if (width>992){
   document.getElementById("mycanvas").width=newwidth; 
   document.getElementById("mycanvas").height=newheight;
   document.body.style.overflow="hidden" 
}
var lastpostionofmouseX,lastpostionofmouseY;
canvas = document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
lineWidth=3;

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{

color=document.getElementById("color").value;
lineWidth=document.getElementById("line").value;
last_postion_of_X=e.touches[0].clientX-canvas.offsetLeft;
last_postion_of_Y=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft
current_position_of_touch_y=e.touches[0].clientY-canvas.offsettop
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=Width_of_line;
console.log("lastpostionofXandycoordinates=");
console.log("x="+ current_position_of_touch_x,current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
ctx.stroke();
last_postion_of_X=current_position_of_touch_x;
last_postion_of_Y=current_position_of_touch_y;
}





function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
