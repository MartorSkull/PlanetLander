var BossL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        this.space = space;
        var mother=new Mother(this.space, this)
        this.addChild(mother, 0);
        
        this.addChild(new Turret(cc.p(size.width-60, size.height/2+200), this.space, this, mother), 1);
        this.addChild(new Turret(cc.p(size.width-60, size.height/2+75), this.space, this, mother), 1);
        this.addChild(new Turret(cc.p(size.width-60, size.height/2-75), this.space, this, mother), 1);
        this.addChild(new Turret(cc.p(size.width-60, size.height/2-200), this.space, this, mother), 1);
        
        this.addChild(new FieldGen(this.space, this, mother, cc.p(size.width-120, size.height/2+266),35));
        this.addChild(new FieldGen(this.space, this, mother, cc.p(size.width-167, size.height/2+142),20));
        this.addChild(new FieldGen(this.space, this, mother, cc.p(size.width-175, size.height/2),0));
        this.addChild(new FieldGen(this.space, this, mother, cc.p(size.width-167, size.height/2-135),-20));
        this.addChild(new FieldGen(this.space, this, mother, cc.p(size.width-120, size.height/2-266),-35));
        
        this.addChild(new Shield(this.space, this, mother), 2);
    }    
});