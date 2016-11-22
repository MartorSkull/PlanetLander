//game Var
var size = cc.winSize;
var center = cc.p(size.width/2,size.height/2);
var ended=false;
var gPlayer=null;

var ColType = [];
ColType.player=0;
ColType.block=1;
ColType.missil=2;
ColType.enemy=3;
ColType.missilE=4;
ColType.end=5;

//debug
var hardwin=true;
var debug=false;    
var winOn = true;
var emovement = true;