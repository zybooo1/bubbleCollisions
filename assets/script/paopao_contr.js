cc.Class({
    extends: cc.Component,

    properties: {
    log:{
    default:null,
    type:cc.Label,
},
x:0,
y:0,
otherx:0,
othery:0,
xspeed:1,
yspeed:1,
screenwidth:960,
screenheight:640,
mradius:74.88,
    },

    // use this for initialization
    onLoad: function () {
var manager = cc.director.getCollisionManager();
manager.enabled = true;
this.screenwidth=cc.director.getWinSizeInPixels().width-this.mradius;
this.screenheight=cc.director.getWinSizeInPixels().height-this.mradius;
 if(this.log!=null){
this.log.string=this.screenwidth;}
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         if(this.node.x>this.screenwidth){
             this.xspeed=0-this.xspeed;
         }
         if(this.node.y>this.screenheight){
             this.yspeed=0-this.yspeed;
         }
         if(this.node.x<this.mradius){
             this.xspeed=0-this.xspeed;
         }
         if(this.node.y<this.mradius){
             this.yspeed=0-this.yspeed;
         }
         this.node.x+=this.xspeed;
         this.node.y+=this.yspeed;
        
     },
     
     
     /**
 * 当碰撞产生的时候调用
 * @param  {Collider} other 产生碰撞的另一个碰撞组件
 * @param  {Collider} self  产生碰撞的自身的碰撞组件
 */
onCollisionEnter: function (other, self) {
    

    // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
    var world = self.world;

    // 碰撞组件的 aabb 碰撞框
    var aabb = world.aabb;

    // 上一次计算的碰撞组件的 aabb 碰撞框
    var preAabb = world.preAabb;

    // 碰撞框的世界矩阵
    var t = world.transform;

    // 以下属性为圆形碰撞组件特有属性
    var r = world.radius;
    var p = world.position;
    
    this.x=p.x;
    this.y=p.y;
    this.otherx=other.world.position.x;
    this.othery=other.world.position.y;
    
    this.xspeed=(this.x-this.otherx)/70;
    this.yspeed=(this.y-this.othery)/70;

    // 以下属性为 矩形 和 多边形 碰撞组件特有属性
    var ps = world.points;
},
/**
 * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
 * @param  {Collider} other 产生碰撞的另一个碰撞组件
 * @param  {Collider} self  产生碰撞的自身的碰撞组件
 */
onCollisionStay: function (other, self) {
    
},
/**
 * 当碰撞结束后调用
 * @param  {Collider} other 产生碰撞的另一个碰撞组件
 * @param  {Collider} self  产生碰撞的自身的碰撞组件
 */
onCollisionExit: function (other, self) {
  
}
});
