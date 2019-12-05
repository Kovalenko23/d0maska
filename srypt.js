function MilitaryResource(type, maxHealth, health, maxDistance, distance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.distance = distance;
  this.maxDistance = maxDistance;
}

MilitaryResource.prototype.isReadyToMove;
MilitaryResource.prototype.isReadyToFight;
MilitaryResource.prototype.restore;
MilitaryResource.prototype.clone;

function Squad(defaultResources) {
  this.squad = [];
  if (defaultResources) this.combineResources(defaultResources);
}
const squad = new Squad();
const g = new MilitaryResource("voin", 228, 300, 1000, 500);

 MilitaryResource.prototype.isReadyToMove = function(){
    return  this.distance < this.maxDistance;
    
 }
console.log (g.isReadyToMove())

MilitaryResource.prototype.isReadyToFight = function(){
    return this.health < this.maxHealth;
     
}
console.log (g.isReadyToFight());

MilitaryResource.prototype.restore = function(){
  return  this.health > this.distance;
}
console.log(g.restore());

Squad.prototype.isReadyToMove;
Squad.prototype.isReadyToFight;
Squad.prototype.restore;
Squad.prototype.getReadyToMoveResources;
Squad.prototype.combineResources;
Squad.prototype.cloneResource;
//  Squad.prototype

console.log (g);