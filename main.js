var mouseEvent = "empty";

var lastPositionX,lastPositionY;

var lastPositionTouchX, lastPositionTouchY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "cyan";

width_line = 2;

var width = screen.width;

new_width = screen.width - 70;

new_height = screen.height - 300;

if (width < 992) 
{
 
   document.getElementById("myCanvas").width = new_width;
   document.getElementById("myCanvas").height = new_height;
   document.body.style.overflow = "hidden";

}

canvas.addEventListener("mousedown", my_mousdown);

function my_mousdown(e)
{
  color = document.getElementById("color").value;
  console.log(color);

  width_line = document.getElementById("width_line").value;
  console.log(width_line);
   
 mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
 mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{

 mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
  CurrentPosition_mouse_x = e.clientX - canvas.offsetLeft;
  CurrentPosition_mouse_y = e.clientY - canvas.offsetTop;

  console.log("X = " + CurrentPosition_mouse_x + " ,Y = " + CurrentPosition_mouse_y);

  if (mouseEvent == "mouseDown")
  {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    ctx.moveTo(lastPositionX,lastPositionY);
    ctx.lineTo(CurrentPosition_mouse_x,CurrentPosition_mouse_y);
    ctx.stroke();
  }
  
  lastPositionX = CurrentPosition_mouse_x;
  lastPositionY = CurrentPosition_mouse_y;
  
}

 

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
  color = document.getElementById("color").value;
  console.log(color);

  width_line = document.getElementById("width_line").value;
  console.log(width_line);
   
 lastPositionTouchX = e.touches[0].clientX - canvas.offsetLeft;
 lastPositionTouchY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
  CurrentPosition_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  CurrentPosition_touch_y = e.touches[0].clientY - canvas.offsetTop;

  console.log("X = " + CurrentPosition_touch_x + " ,Y = " + CurrentPosition_touch_y);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    ctx.moveTo(lastPositionTouchX,lastPositionTouchY);
    ctx.lineTo(CurrentPosition_touch_x,CurrentPosition_touch_y);
    ctx.stroke();
  
  lastPositionTouchX = CurrentPosition_touch_x;
  lastPositionTouchY = CurrentPosition_touch_y;
  
}


function clear_area()
{
  ctx.clearRect(0,0,canvas.width, canvas.height);
}