//game Var
var size = cc.winSize;
var center = cc.p(size.width/2,size.height/2);
var ended=false;
var gPlayer=null;
var level=1;

var ColType = [];
ColType.player=0;
ColType.block=1;
ColType.missilP=2;
ColType.enemy=3;
ColType.missilE=4;
ColType.shield=5;
ColType.FieldGen=6;

//debug
var hardwin=true;
var debug=false;    
var winOn = true;
var emovement = true;
