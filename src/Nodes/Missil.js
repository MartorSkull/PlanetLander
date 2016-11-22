var Missil = cc.PhysicsSprite.extend({
    ctor:function(type, position, rotation, aim, father, space){
        this.space=space;
        this.father=father;
        this._super("res/cannonMissil"+type+".png");
        this.attr({
            x:position.x,
            y:position.y,
            rotation:rotation
        });
        /////////////////////////////////////
        var movement = new cc.moveTo(1, aim);
         
    }
});