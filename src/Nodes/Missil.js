var Missil = cc.PhysicsSprite.extend({
    ctor: function (space, pos, father, bool) {
        this._super(res.Missil);
        
        this.space = space;
        this.father=father;
        this.bool = bool;
        
        var contentSize = this.getContentSize();
        
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        
        this.setBody(this.body);
        this.attr({
            rotation : (this.bool+90),
            x:pos.x+58,
            y:pos.y
        });
        
        this.shape = new cp.BoxShape(this.body, contentSize.width-33, contentSize.height-80);
        this.space.addShape(this.shape);
        
        if ("+"==this.bool){
            this.shape.setCollisionType(ColType.missil);
            cc.log("1");
        }else{
            this.shape.setCollisionType(ColType.missilE);
            cc.log("2");
        }
        
        
        var action = cc.moveTo(0.5, cc.p((this.bool+1400), this.y));
        this.runAction(action);
        
        this.scheduleUpdate();
    },
    update:function(dt){
        if (this.x>size.width+100 || this.x< -100){
              this.remove();
        };
    },
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
    }
});