var HoneyMakerBee = function() {
  Bee.call(this);
  this.honeyPot = 0;
  this.age = 10;
  this.job = 'make honey';
};

HoneyMakerBee.prototype.eat = function(){
  this.eat
}

// HoneyMakerBee.prototype.eat = function(){
//
// }

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
}
