var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height / 2;

var dx = 2;
var dy = 2;

function draw_ball() 
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function draw() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_ball();
    
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) 
        dx *= -1;
    
    if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) 
        dy *= -1;
    
    x += dx;
    y += dy;
}

setInterval(draw, 5);