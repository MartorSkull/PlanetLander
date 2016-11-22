var Enemy = cc.PhysicsSprite.extend({
    ctor:function(space, pos, father){
        this._super(res.cubo_img);
        this.space=space;
        this.father=father;
        this.count=0;
        this.life=2;
        this.movement=5;
        this.scheduleUpdate();
        var contentSize = this.getContentSize();
        ////////////////////////////////////////////////////////
        this.body= new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        this.setBody(this.body);
        ////////////////////////////////////////////////////////
        this.shape = new cp.BoxShape(this.body, contentSize.width*0.2, contentSize.height*0.2);
        this.shape.setCollisionType(ColType.enemy);
        this.space.addShape(this.shape);
        ////////////////////////////////////////////////////////
        this.attr({
            scale:0.2,
            x:pos.x,
            y:pos.y,
            rotation:-90
        });
        this.body.parent=this;
        this.body.ajar="Enemigo";
    ////////////////////////////////////////////////////////////
    },
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
        this.father.count=0;
    },
    ///////////////////////////////////////////////////////////
    update:function(dt){
        if (this.x < -50){
            this.remove();
        }
        ////////////////////////////////////////////////////////
        if (this.father.count >70){
            if(this.y>640){
                this.movement*=-1;
            };
            if(this.y<75){
                this.movement*=-1;
            };
            if(emovement){
                this.y+=this.movement;
            };
        }
        ////////////////////////////////////////////////////////
        if(emovement){    
            if (this.count > (Math.random()*8)+0.4){
                var misil1 = new Missil(this.space, cc.p(this.x-170, this.y+30), this.father, "-", false);
                var misil = new Missil(this.space, cc.p(this.x-170, this.y-30), this.father, "-", false);
                this.father.addChild(misil);
                this.father.addChild(misil1);
                this.count =0;
            }else{
                this.count +=dt;
            }
        }
    },
    ///////////////////////////////////////////////////////////
    liferest:function(arbiter, space){
        if (this.life==0){ 
            var action = new cc.moveTo(1, cc.p(-1000, this.y));
            this.runAction(action);
        }else{
            this.life -=1;
        }
    }
});