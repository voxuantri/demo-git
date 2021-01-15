function Chicken(name){
	this.name = name;
	this.stomach = [];
}
Chicken.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}; 
module.exports = Chicken;