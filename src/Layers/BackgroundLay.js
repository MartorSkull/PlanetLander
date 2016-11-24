var BackgroundL= cc.Layer.extend({
    ctor:function(num){
        this._super();
        this.num = num;
        if(num==0){
            var spriteBg = new cc.Sprite.create(res.backgroundJ_img);
            spriteBg.attr({
                scale:0.9,
                x: 863,
                y: 360
            });
            this.addChild(spriteBg);
            var sprite_action1 = cc.moveTo(70, cc.p(425, 360));
            spriteBg.runAction(sprite_action1); 
        }else{
            var spriteBg = new cc.Sprite(res.backgroundM_img);
            spriteBg.attr({
                scale:0.7,
                x: 670,
                y: 360
            });
            this.addChild(spriteBg)
            var sprite_action1 = cc.moveTo(60, cc.p(610, 360));
            var sprite2 = new cc.Sprite.create(res.backgroundPlanet_img);
            sprite2.attr({
                x:size.width-100,
                y:size.height,
                rotation:180,
                scale:1.8
            });
            var action = cc.rotateBy(1, 1).repeatForever();
            sprite2.runAction(action);
            this.addChild(sprite2);
        };
    }
});