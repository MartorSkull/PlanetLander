var Level1 = cc.Scene.extend({
    space : null,
    initPhysics : function(){
        this.space = new cp.Space();
    },
    
    update : function(dt){
        this.space.step(dt);
    }, 
    
    onEnter : function () {
        this._super();
        
        level=1;
        this.initPhysics();
        this.addChild(new BackgroundL(0), 0);
        this.addChild(new PlayerL(this.space), 1);
        this.addChild(new Map(this.space),2);
        this.scheduleUpdate();
    }
});