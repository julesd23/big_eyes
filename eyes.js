// color shift function

$(document).ready(function(){
    $('.container').on('mousemove',function(){
        var x = event.pageX;
        var y = event.pageY;
        x = x/4;
        y = y/4;
        $(this).css({
            'background-color' : "rgb("+x+","+y+","+((x+y)/2)+")"
        })
    })
})

// eye tracking function

var balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
};