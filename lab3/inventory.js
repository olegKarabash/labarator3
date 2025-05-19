class Item {
  constructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
  }

  getInfo() {
    return `Name: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
  }

  setWeight(newWeight) {
    this.weight = newWeight;
  }
}

class Weapon extends Item {
  constructor(name, weight, rarity, damage, durability) {
    super(name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
  }

  use() {
    if (this.durability > 0) {
      this.durability -= 10;
    }
  }

  repair() {
    this.durability = 100;
  }

  getInfo() {
    return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
  }
}

function ItemConstructor(name, weight, rarity) {
  this.name = name;
  this.weight = weight;
  this.rarity = rarity;
}

ItemConstructor.prototype.getInfo = function() {
  return `Name: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
};

ItemConstructor.prototype.setWeight = function(newWeight) {
  this.weight = newWeight;
};

function WeaponConstructor(name, weight, rarity, damage, durability) {
  ItemConstructor.call(this, name, weight, rarity);
  this.damage = damage;
  this.durability = durability;
}

WeaponConstructor.prototype = Object.create(ItemConstructor.prototype);
WeaponConstructor.prototype.constructor = WeaponConstructor;

WeaponConstructor.prototype.use = function() {
  if (this.durability > 0) {
    this.durability -= 10;
  }
};

WeaponConstructor.prototype.repair = function() {
  this.durability = 100;
};

WeaponConstructor.prototype.getInfo = function() {
  return `${ItemConstructor.prototype.getInfo.call(this)}, Damage: ${this.damage}, Durability: ${this.durability}`;
};

const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);
console.log("Updated Weight:", sword.getInfo());

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log("Durability after use:", bow.durability);
bow.repair();
console.log("Durability after repair:", bow.durability);

const axe = new ItemConstructor("Battle Axe", 5.0, "common");
console.log(axe.getInfo());

const crossbow = new WeaponConstructor("Crossbow", 4.0, "rare", 20, 100);
console.log(crossbow.getInfo());
crossbow.use();
console.log("Durability after use:", crossbow.durability);
crossbow.repair();
console.log("Durability after repair:", crossbow.durability);

console.log("Optional chaining example:", bow?.damage);
