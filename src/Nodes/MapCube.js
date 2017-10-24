var Block = cc.PhysicsSprite.extend({
    ctor:function(space, pos, father, velocity){
        var imgs = [res.map1_img, res.map2_img, res.map3_img];
        var img = imgs[Math.floor(Math.random()*2)];
        
        this._super(img);
        this.scheduleUpdate();
        this.father=father;
        this.ran = (Math.random()*14)-6;

        this.space = space;
        var contentSize = this.getContentSize();
        
        this.body = new cp.Body(Infinity, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        this.body.ajar = "Meteor"
        this.body.father = this;        

        this.setBody(this.body);
        this.attr({
            x:pos.x,
            y:pos.y
        });
        
        this.shape = new cp.BoxShape(this.body, contentSize.width, contentSize.height);
        this.space.addShape(this.shape);
        var move=null;
        var rand=Math.random()*size.height;
        if(hardwin){
            move=cc.moveTo(velocity, cc.p(-200, rand));
        }else{
            move=cc.moveTo(0.0001, cc.p(-200, rand));
        };
        this.runAction(move);
        
        this.shape.setCollisionType(ColType.block);
        this.space.addCollisionHandler(ColType.block, ColType.missilP, this.collision.bind(this), null, null, null);
    },
    update:function(dt){
        if(this.toDel) this.remove();
        this.setRotation(this.rotation+this.ran);
        if (this.x<-75){
            this.remove();
        };
    },
    destroy:function(dt){
        this.toDel = true;
    },
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.father.removeChild(this);
        this.release();
        this.unscheduleUpdate();
    },
    collision:function(arbiter, space){
            tt = arbiter.body_b;
            ot = arbiter.body_a;
        if(arbiter.body_a.ajar=="Meteor"){
            tt = arbiter.body_a;
            ot = arbiter.body_b;
        }
        tt.father.destroy();
        ot.parent.del();
    }
});