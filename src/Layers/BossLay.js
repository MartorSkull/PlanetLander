var BossL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        this.space = space;
        this.addChild(new Turret(cc.p(0, 0), this.space, this));
    }    
});