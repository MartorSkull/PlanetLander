var BossL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        this.space=space;
        this.addChild(new Turret(this.space));
    }    
});