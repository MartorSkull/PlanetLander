var MenuL = cc.Layer.extend({
    ctor:function(){
        this._super();

        var menuItem1 = new cc.MenuItemFont("Play", play);
        menuItem1.setPosition(center);
        var menuItem2 = new cc.MenuItemFont("Prueba", win);
        menuItem2.setPosition(cc.p(280, 300));
        var menuItem3 = new cc.MenuItemFont("Level2", next);
        menuItem3.setPosition(cc.p(320, 240));
        
        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3);
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
        function next(){
            var scene = new Level2();
            cc.director.runScene(scene);
            
        }
    }
});