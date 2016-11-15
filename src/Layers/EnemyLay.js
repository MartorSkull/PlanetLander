var EnemyL = cc.Layer.extend({
    ctor:function(space){
        this._super();
        this.space = space;
        this.scheduleUpdate();
        this.count = 0;
        },
    update:function(dt){
        if (this.count == 5){
            var x = Math.floor((Math.random()*400)+800);
            var y = Math.floor((Math.random() * 720) + 1);
            var enemy = new Enemy(this.space, cc.p(1400, 360), this);
            var action = cc.moveTo(1, cc.p(x, y));
            enemy.runAction(action);
            this.addChild(enemy);
            this.count = 6;
        }else{
            this.count += 1;
        };
    }
        
});