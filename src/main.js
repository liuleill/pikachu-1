// import string from './css.js'
const string = `
<style>
.skin *{box-sizing: border-box;margin:0;padding:0;}
.skin *::before,.skin *::after{box-sizing: border-box;}

.skin{
    position: relative;
    background-color:rgb(255,219,0);
    min-height: 100vh;
    /* 和height：100%的区别，没有内容，不会被撑开，而100vh，没有内容也会被曾恺和屏幕高度一样  */
}

.nose{
    z-index: 3;
}

@keyframes wave {
    0%{
        transform: rotate(0deg);
    }   
    33%{
        transform: rotate(15deg);
    } 
    66%{
        transform: rotate(-15deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.san:hover{
    animation: wave 300ms infinite linear;
    transform-origin:center bottom ;
}

.san{
    border:10px solid red;
    border-color: black transparent transparent transparent;
    width:10px;
    height:10px;
    position: relative;
    left:50%;
    top:200px;
    margin-left:-10px;
    z-index: 2;
}

.yuan{
    position: absolute;
    width:20px;
    height:10px;
    left:-10px;
    top:-20px;
    border-radius: 15px 15px 0 0;
    background-color: black;
}

.eye{
    border:2px solid #000;
    width:64px;
    height:64px;
    position: absolute;
    left: 50%;
    top:150px;
    border-radius: 50%;
    margin-left:-32px;
    background:#2e2e2e;
}

.eye::before{
    content:'';
    border:3px solid #000;
    display: block;
    width:28px;
    height:28px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left:8px;
    top:4px;
}

.eye::after{
    
}

.eye.left{
    transform: translateX(-120px);
}

.eye.right{
    transform: translateX(120px);
}

.mouth{
    width:200px;
    height:200px;
    position:absolute;
    left:50%;
    top:220px;
    margin-left:-100px;
}

.mouth .up{
    position: relative;
    z-index: 1;
}

.mouth .up .lip{
    border:5px solid black;
    height:30px;
    width:100px;
    border-top-color: transparent;
    border-right-color:transparent ;
    position: relative;
    position:absolute;    
    left:50%;
    background-color: rgb(255,219,0);
}

.mouth .up .lip.left{
    border-radius:0 0 0 50px;
    transform: rotate(-15deg) translateX(0px);
    margin-left: -50%;
}

.mouth .up .lip.right{
    top:-24px;
    border-radius:0 0 50px 0;
    transform: rotate(15deg) translateX(100px);
    margin-left: -50%;
}

.mouth .up .lip::before{
    content: '';
    display: block;
    width:80px;
    height:30px;
    position: absolute;
    background:rgb(255,219,0);
    bottom:0;
}

.mouth .up .lip.left::before{
    right:-5px;
}

.mouth .up .lip.right::before{
    left:-5px;
}

.mouth .down{
    position:absolute;
    height:180px;
    width:100%;
    top:6px;
    overflow: hidden;
}

.mouth .down .yuan1{
    border:5px solid black;
    width:150px;
    height:1000px;
    position:absolute;
    bottom:0;
    left:50%;
    margin-left:-75px;
    border-radius:75px/300px;
    background: rgb(168,16,8);
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    border:1px solid black;
    width:140px;
    height:140px;
    position:absolute;
    bottom:0;
    left:50%;
    margin-left:-70px;
    border-radius: 50%;
    background:rgb(255,91,93);
}

.face{
    position:absolute;
    left:50%;
    border:5px solid black;
    width:88px;
    height:88px;
    top:280px;
    margin-left:-44px;
    z-index: 3;
    border-radius: 50%;
    background-color: rgb(254,24,0);
}

.face.left{
    transform: translateX(180px);
}

.face.right{
    transform: translateX(-180px);
}
</style>
`
const player = {
    id : undefined,
    time :100,
    n : 1,
    ui:{
        demo :document.querySelector('#demo'),
        demo2 :document.querySelector('#demo2')

    },
    init:()=>{
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    events :{
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }       
        }
    },
    run :() => {
        player.n += 1
            if(player.n>string.length){
                window.clearInterval(player.id)
                return 
            }
            //console.log(n + ":" + string.substr(0,n))
            player.ui.demo2.innerHTML = string.substr(0,player.n)
            player.ui.demo.innerText = string.substr(0,player.n)
            demo.scrollTop = demo.scrollHeight
    },
    play : () =>{
        player.id = setInterval(player.run,player.time)
    },
    pause : () =>{
        window.clearInterval(player.id)
    },
    slow : ()=>{
        player.pause()
        player.time = 500
        player.play()
    },
    normal : ()=>{
        player.pause()
        player.time = 100
        player.play()
    },
    fast : ()=>{
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()
