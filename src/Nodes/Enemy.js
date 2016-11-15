var Enemy = cc.PhysicsSprite.extend({
    ctor:function(space, pos, father){
        this._super(res.cubo_img);
        this.space=space;
        this.father=father;
        this.count=0;
        this.scheduleUpdate();
        ////////////////////////////////////////////////////////
        this.body= new cp.Body(1, cp.momentForBox(1, 200, 200));
        this.space.addBody(this.body);
        this.setBody(this.body);
        ////////////////////////////////////////////////////////
        this.shape = new cp.BoxShape(this.body, 180, 180);
        this.shape.setCollisionType(ColType.enemy);
        this.space.addShape(this.shape);
        ////////////////////////////////////////////////////////
        this.attr({
            scale:0.3,
            x:pos.x,
            y:pos.y
        });
        ////////////////////////////////////////////////////////
        this.space.addCollisionHandler(ColType.enemy, ColType.missil, this.collsionWithMisil.bind(this), null, null, null);
    ////////////////////////////////////////////////////////////
    },
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
    },
    ///////////////////////////////////////////////////////////
    update:function(dt){
        if (this.x < -50){
            this.remove();
        }
        if (this.count == 40){
            var misil = new Missil(this.space, cc.p(this.x, this.y), this.father, "-");
            this.father.addChild(misil);
            this.count =0
        }else{
            this.count +=1;
        }
    },
    collsionWithMisil:function(arbiter, space){
        var action = new cc.moveTo(1, cc.p(-1000, this.y));
        this.runAction(action);
    }
});