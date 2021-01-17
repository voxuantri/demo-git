function Mouse(name) {
    this.name = name;
    this.dead = false;
}
Mouse.prototype.die = function() {
    this.dead = true;
};
Mouse.prototype.drink = function() {
    console.log('Drinking');
};
module.exports = Mouse;