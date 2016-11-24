var BossL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        this.space = space;
        this.addChild(new Turret(cc.p(size.width-100, size.height/2+300), this.space, this));
        this.addChild(new Turret(cc.p(size.width-250, size.height/2+150), this.space, this));
        this.addChild(new Turret(cc.p(size.width-150, size.height/2), this.space, this));
        this.addChild(new Turret(cc.p(size.width-250, size.height/2-150), this.space, this));
        this.addChild(new Turret(cc.p(size.width-100, size.height/2-300), this.space, this));
    }    
});