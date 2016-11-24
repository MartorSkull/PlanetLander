var BossL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        this.space = space;
        
        this.addChild(new Mother(this.space, this), 0);
        
        //this.addChild(new Turret(cc.p(size.width-100, size.height/2+300), this.space, this), 1);
        //this.addChild(new Turret(cc.p(size.width-250, size.height/2+150), this.space, this), 1);
        //this.addChild(new Turret(cc.p(size.width-250, size.height/2-150), this.space, this), 1);
        //this.addChild(new Turret(cc.p(size.width-100, size.height/2-300), this.space, this), 1);
        
        
        
        this.addChild(new Shield(this.space, this), 2);
    }    
});