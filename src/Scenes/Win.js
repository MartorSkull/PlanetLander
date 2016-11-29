var winS = cc.Scene.extend({
    onEnter:function(){
        this.addChild(new BackgroundL(0),0);
        this.addChild(new cc.LabelTTF("You win", "Arial", 38));
    },
});