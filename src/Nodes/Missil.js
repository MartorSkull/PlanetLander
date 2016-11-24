var Missil = cc.PhysicsSprite.extend({
    ctor:function(ally, position, aim, father, space){
        if(ally){
            this._super(res.misil1_img);
        }else{
            this._super(res.misil2_img);
        };
        this.ally=ally;
        this.space=space;
        this.father=father;
        this.toDel=false;
        this.aim=aim;
        var scale = 0.4;

        var contentSize = this.getContentSize();
        /////////////////////////////////////
        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.space.addBody(this.body);
        this.setBody(this.body);
        this.body.parent=this;
        this.attr({
            x:position.x,
            y:position.y,
            scale:scale
        });
        this.rotation=-90+this.getAngle();
        /////////////////////////////////////
        this.shape = new cp.BoxShape(this.body,contentSize.width*scale, contentSize.height*scale);
        this.space.addShape(this.shape);
        if(ally){
            this.shape.setCollisionType(ColType.missilP);
            var movement = new cc.moveTo(1, cc.p(this.aim.x,  this.aim.y));
        }else{
            this.shape.setCollisionType(ColType.missilE);  
            var movement = new cc.moveTo(1, this.ext());
        };
        /////////////////////////////////////
        this.runAction(movement);
        /////////////////////////////////////
        this.scheduleUpdate();
    },
    /////////////////////////////////////////
    getAngle:function(){
        var num = null;
        if(this.aim.y>this.y){
            num = ((this.aim.y - this.y)/(this.x-this.aim.x));
        }else if(this.aim.y<this.y){
            num = -((this.y - this.aim.y)/(this.x-this.aim.x));
        }
        var angle= (Math.atan(num)*(180/Math.PI));
        return angle;
    },
    /////////////////////////////////////////
    ext:function(){
        var rel; 
        if(this.aim.y>this.y){
            rel = -((this.aim.y - this.y)/(this.x-this.aim.x));
        }else if(this.aim.y<this.y){
            rel = ((this.y - this.aim.y)/(this.x-this.aim.x));
        }
        var pos = cc.p(this.aim.x-200, this.aim.y-(200*rel));
        return pos;
    },
    /////////////////////////////////////////
    update:function(dt){
        if(this.toDel){
            this.remove();  
        };
        if(this.ally){
            if(this.x>=size.width+80){
                this.remove();
            };
        }else{
            if(this.x<=-80){
                this.remove();
            };
        };
    },
    /////////////////////////////////////////
    remove:function(){
        this.body.removeShape(this.shape);
        this.space.removeShape(this.shape);
        this.space.removeBody(this.body);
        this.release();
        this.father.removeChild(this);
        this.unscheduleUpdate();
    },
    del:function(){
        this.toDel=true;
    }
});