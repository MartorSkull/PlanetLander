var GameOverL=cc.Layer.extend({
    ctor:function(){
        this._super();
        var menuItem1 = new cc.MenuItemFont("Go To Menu", play);
        menuItem1.setPosition(cc.p(240, 360));
        
        var menu = new cc.Menu(menuItem1);
        menu.setPosition(cc.p(0,0))
        this.addChild(menu);
        
        function play(){
            var scene = new Level1();
            cc.director.runScene(new Menu());
        };
    }
});