function Chicken(name){
	this.name = name;
	this.stomach = [];
}
Chicken.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}; 
Chicken.prototype.run = function(){
	console.log('Running');
}; 
module.exports = Chicken;