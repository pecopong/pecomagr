var frame;
var sea;
var easel;
var ball;
var wall;
var floor;

var init = function() {
    frame = document.querySelector('#frame');    
    sea = document.querySelector('#sea');    
    easel = document.querySelector('#easel');    
    ball = document.querySelector('#ball');
    wall = document.querySelector('#wall');
    floor = document.querySelector('#floor');
};

window.onload = function() {
    init();  
};


window.onmousemove = function(e) {
    var dx = e.pageX - 340;
    var f = 'rotateY(' + dx/50 + 'deg)'; 
    frame.style['-webkit-transform'] = f;
    var s = dx/100 +'px';
    sea.style.marginLeft = s;
    var e = 'rotateY(' + -dx/100 + 'deg)';
    var ee = dx/80 + 140 +'px';
    easel.style['-webkit-transform']= e;
    easel.style.marginLeft=ee;
    var b = dx/70 - 200 +'px';
    ball.style.marginLeft = b;
    var w = dx/80 +'px';
    wall.style.marginLeft = w;
    var f = dx/80 +'px';
    floor.style.marginLeft=f;  
};