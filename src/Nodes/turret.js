var Turret = cc.Sprite.extend({
    ctor:function(pos, space, father){
        this._super(res.torret_img);
        this.count=0;
        this.father=father;
        this.space=space;
        this.scheduleUpdate();
        this.attr({
            x:size.width-180,
            y:size.height/2,
            scale:0.1
        });
    },
    /////////////////////////////////////////////////////////
    update:function(dt){
        var num = null;
        if(gPlayer.y>this.y){
            num = ((gPlayer.y - this.y)/(this.x-gPlayer.x));
        }else if(gPlayer.y<this.y){
            num = -((this.y - gPlayer.y)/(this.x-gPlayer.x));
        }
        var angle= (Math.atan(num)*(180/Math.PI))+90;
        this.rotation= angle;
        if (this.count>1){
            this.shoot();
            this.count=0;
        }else{
            this.count+=dt;
        };
    },
    /////////////////////////////////////////////////////////
    shoot:function(){
        var missil = new Missil(false, cc.p(this.x, this.y), cc.p(gPlayer.x, gPlayer.y), this.father, this.space);
        this.father.addChild(missil);
    },
    //////////////////////////////////////////////////////////
});