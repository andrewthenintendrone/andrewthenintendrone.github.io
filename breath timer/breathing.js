

var breath_start = 0
var breathing = 0



function start_breathing() {
    breath_start = new Date();
    breathing = true;

    breathing = window.setInterval(do_breathing, 30);
}

function do_breathing() {
    var now = new Date()

    var time_since_start = now - breath_start;
    var elapsed_seconds = time_since_start / 1000;

    var r = (Math.sin(elapsed_seconds / 2.5) + 1) / 2 * 100;
    console.log(r);

    circle(r);

    if (elapsed_seconds >= 60) {
        clearInterval(breathing);
    }
}

function circle(r) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(250, 250, 100, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#8000FF";
    ctx.arc(250, 250, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}