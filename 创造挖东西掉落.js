

function destroyBlock(x,y,z,s){
if(Level.getGameMode()==1){
var a=Player.getPointedBlockData();
var b=Player.getPointedBlockId();
var c=Player.getPointedBlockX();
var d=Player.getPointedBlockY();
var e=Player.getPointedBlockZ();
Level.dropItem(c,d,e,0,b,1,a)
}
}