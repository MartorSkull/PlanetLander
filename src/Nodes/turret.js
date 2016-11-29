var Turret = cc.Sprite.extend({
    ctor:function(pos, space, father, mother){
        this._super(res.bossTurretOff_img);
        this.active=false;
        this.count=0;
        this.father=father;
        this.space=space;
        this.mother=mother;
        this.scheduleUpdate();
        this.attr({
            x:pos.x,
            y:pos.y,
            scale:0.4
        });
        
        this.energy=new cc.Sprite(res.bossTurretOn_img);
        this.energy.attr({
            x:this.x,
            y:this.y,
            scale:this.scale
        });
        this.father.addChild(this.energy, 2);
        this.scheduleUpdate();
        
    },
    /////////////////////////////////////////////////////////
    update:function(dt){
        this.rotation= this.getAngle();
        this.energy.rotation=this.getAngle();
        if(this.active!=this.mother.active){
            this.active=this.mother.active;
            if (this.mother.active){
                cc.log("10");
                this.on();
            };
        };
        if(this.mother.active){
            if (this.count>Math.random()*15+0.2){
                this.shoot();
                this.count=0;
            }else{
                this.count+=dt;
            };
        };
    },
    /////////////////////////////////////////////////////////
    getAngle:function(){
        var num = null;
        if(gPlayer.y>this.y){
            num = ((gPlayer.y - this.y)/(this.x-gPlayer.x));
        }else if(gPlayer.y<this.y){
            num = -((this.y - gPlayer.y)/(this.x-gPlayer.x));
        }
        var angle= (Math.atan(num)*(180/Math.PI));
        return angle;
    },
    /////////////////////////////////////////////////////////
    shoot:function(){
        if(emovement){
            var missil = new Missil(false, cc.p(this.x, this.y), cc.p(gPlayer.x, gPlayer.y), this.father, this.space);
            this.father.addChild(missil);
        };
    },
    //////////////////////////////////////////////////////////
    on:function(){
        this.energy.setOpacity(255);
        this.energy.runAction(new cc.fadeTo(10, 0));
    },
});