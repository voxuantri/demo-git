var Mouse = require('./Mouse');

function Cat(name) {
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat = function(animal) {

    if (animal instanceof Mouse) {
        this.stomach.push(animal);
    } else {
        throw new Error('Cat can only eat Mouse')
    }
};
Cat.prototype.run = function() {

    console.log('Running');
};

Cat.prototype.drink = function() {
    console.log('Drinking');
};
module.exports = Cat;