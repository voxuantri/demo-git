var Mouse = require('./Mouse');
var Cat = require('./Cat');

var cat = new Cat('Tom');
var mouse = new Mouse('Mickey');
cat.eat(mouse);
console.log(cat);