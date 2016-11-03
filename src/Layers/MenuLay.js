var MenuL = cc.Layer.extend({
    ctor:function(){
        this._super();

        var menuItem1 = new cc.MenuItemFont("Play", play);
        menuItem1.setPosition(center);
        var menuItem2 = new cc.MenuItemFont("Prueba", win);
        menuItem2.setPosition(cc.p(280, 300));
        
        var menu = new cc.Menu(menuItem1, menuItem2);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);
        
        function play(){
            var scene = new Level1();
            cc.director.runScene(scene);
        }
        function win(){
            var scene = new Cine1();
            cc.director.runScene(scene);
        }
    }
});