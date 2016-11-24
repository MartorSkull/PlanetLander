var Turret = cc.Sprite.extend({
    ctor:function(pos, space, father){
        this._super(res.bossTurretOff_img);
        this.count=0;
        this.father=father;
        this.space=space;
        this.scheduleUpdate();
        this.attr({
            x:pos.x,
            y:pos.y,
            scale:0.4
        });
    },
    /////////////////////////////////////////////////////////
    update:function(dt){
        this.rotation= this.getAngle();
        if (this.count>Math.random()*15+0.2){
            this.shoot();
            this.count=0;
        }else{
            this.count+=dt;
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
});