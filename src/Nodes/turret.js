var Turret = cc.Sprite.extend({
    ctor:function(pos){
        this._super(res.torret_img);
        this.scheduleUpdate();
        this.attr({
            x:size.width-180,
            y:size.height/2,
            scale:0.2
        });
    },
    /////////////////////////////////////////////////////////
    update:function(){
        var num = null;
        if(gPlayer.y>this.y){
            num = ((gPlayer.y - this.y)/(this.x-gPlayer.x));
        }else if(gPlayer.y<this.y){
            num = -((this.y - gPlayer.y)/(this.x-gPlayer.x));
        }
        var angle= (Math.atan(num)*(180/Math.PI))+90;
        this.rotation= angle;
    }
    //////////////////////////////////////////////////////////
});