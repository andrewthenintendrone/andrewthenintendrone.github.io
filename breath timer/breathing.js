var breath_start = 0

function start_breathing() {
    breath_start = new Date();

    breathing = window.setInterval(do_breathing, 30);
}

function do_breathing() {
    var now = new Date()

    var time_since_start = now - breath_start;
    var elapsed_seconds = time_since_start / 1000;

    var cycles = elapsed_seconds * Math.PI * 2;

    var r = (Math.cos(cycles / 10) + 1) / 2;

    if (elapsed_seconds >= 60) {
        r = 1;
        clearInterval(breathing);
    }

    circle(r * 250);
}

function circle(r) {
    // canvas context
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // white background
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(250, 250, 250, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // breath circle
    ctx.beginPath();
    ctx.fillStyle = "#8000FF";
    ctx.arc(250, 250, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}