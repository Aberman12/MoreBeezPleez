var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey'
  console.log(this.treasureChest)
};

RetiredForagerBee.prototype.forage = function(){
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.eat = function(){
  this.eat
}

RetiredForagerBee.prototype.gamble = function(){
  this.treasureChest.push('treasure');
}
