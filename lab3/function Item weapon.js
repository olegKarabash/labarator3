function Item(name, weight, rarity) {
  this.name = name;
  this.weight = weight;
  this.rarity = rarity;
}

Item.prototype.getInfo = function() {
  return `Name: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
};

Item.prototype.setWeight = function(newWeight) {
  this.weight = newWeight;
};

function Weapon(name, weight, rarity, damage, durability) {
  Item.call(this, name, weight, rarity);
  this.damage = damage;
  this.durability = durability;
}

Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

Weapon.prototype.use = function() {
  if (this.durability > 0) {
    this.durability -= 10;
  }
};

Weapon.prototype.repair = function() {
  this.durability = 100;
};

Weapon.prototype.getInfo = function() {
  return `${Item.prototype.getInfo.call(this)}, Damage: ${this.damage}, Durability: ${this.durability}`;
};
