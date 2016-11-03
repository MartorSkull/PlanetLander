var Cine1 = cc.Scene.extend({
    onEnter : function (){
        this._super();
        this.addChild(new BackgroundL(0), 0);
        this.addChild(new CineL1(), 1);
    }
});


