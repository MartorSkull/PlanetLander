var EnemyL = cc.Layer.extend({
    ctor:function(){
        this._super();
        var enemy = new Enemy();
        enemy.attr({
            x:880,
            y:320
        });
        this.addChild(enemy, 0);
    }
});