var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave" , my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";

}
canvas.addEventListener("mouseup" , my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent = "mouseUp";

}
canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.StrokeStyle = color;
        ctx.linewidth = width_of_line;
        
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of xand y coordinates");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_Y);
        ctx.stroke();


    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_Y;


}