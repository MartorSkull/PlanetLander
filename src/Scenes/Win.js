var winS = cc.Scene.extend({
    onEnter:function(){
        this.addChild(new BackgroundL(0),0);
        win = new cc.LabelTTF("You win", "Arial", 38)
        win.setPosition(cc.p(center))
        this.addChild(win);
    },
});