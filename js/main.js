//coding UI
var showGrid = 0;

var ssJson = [];
var personNow = 0;

var callback = function(o){
    ssJson = o;
}

var scrolling = function(y){
    if(typeof y === 'number') {
        var x = y;
    }

    setTimeout(function(){
        if(x > 3){
            x -= x/20;
            window.scrollTo(0,x);
            scrolling(window.scrollY);
        } else {
            window.scrollTo(0,0);
        }
    },1);  
};

var init = function(){
    var botWrap = document.querySelector('#botWrap');
    var input_name = document.querySelector('#input_name');
    var input_engName = document.querySelector('#input_engName');
    var input_tel = document.querySelector('#input_tel');
    var input_email = document.querySelector('#input_email');
    var topCover = document.querySelector('#topCover');
    var topLoad = document.querySelector('#topLoad');
    var chars = [];

    //background visual division
    var bgs = document.querySelectorAll('div');
    if(showGrid == true){
        for(var i = 0; i < bgs.length; i ++){
            bgs[i].style['background-color'] = 'rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.3)';
        }
        document.querySelector('#topCover').style['background-color'] = 'white';
    }

    for(var i = 0; i < ssJson.length; i++){
        chars[i] = document.createElement('div');
        chars[i].className = 'chars';
        botWrap.appendChild(chars[i]);
        chars[i].innerHTML = '<div class="chars_name">'+ssJson[i].name+'</div>';
        if(ssJson[i].isCreated == 0){
            chars[i].innerHTML += '<div class="chars_char"><img src="./data/notCreated.png"></div>';  
        }
    }

    

    //person choice
    var choice = function(x){
        chars[x].onclick = function(){
            personNow = x;
            
            input_name.value = ssJson[x].name;
            if(ssJson[x].engName == ''){
                input_engName.value = '영문명을 입력해주세요';
            } else {
                input_engName.value = ssJson[x].engName;
            }
            if(ssJson[x].tel == ''){
                input_tel.value = '전화번호를 입력해주세요';
            } else {
                input_tel.value = ssJson[x].tel;
            }
            if(ssJson[x].email == ''){
                input_email.value = '이메일 주소를 입력해주세요';
            } else {
                input_email.value = ssJson[x].email;
            }

           inputReset();
            
           //scroll gradually
           
           scrolling(window.scrollY);

           topCover.style['opacity']='0';
           topLoad.style['opacity']='1';
           topLoad.style['display']='initial';
           setTimeout(function(){
               topCover.style['display']='none';
               topLoad.style['opacity']='0';
               setTimeout(function(){
                   topLoad.style['display']='none';
               },200);
           },1000);
        }
    }

    //if no value, reset input
    var inputReset = function(){
        input_engName.onclick = function(){
           if(input_engName.value == '영문명을 입력해주세요'){
            input_engName.value = '';
           }
       }
       input_tel.onclick = function(){
           if(input_tel.value == '전화번호를 입력해주세요'){
            input_tel.value = '';
           }
       }
       input_email.onclick = function(){
           if(input_email.value == '이메일 주소를 입력해주세요'){
            input_email.value = '';
           }
       }
    }

    for(var i = 0; i < ssJson.length; i ++){
       choice(i);
    }
    
};

window.onload = init;