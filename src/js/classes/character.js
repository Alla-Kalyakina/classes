/* eslint-disable no-undef */
export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name error');
    }
    if (!types.includes(type)) {
      throw new Error('Type error');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
