function Mouse(name) {
    this.name = name;
    this.isdead = false;
}
Mouse.prototype.die = function() {
    this.isdead = true;
    
};
module.exports = Mouse;