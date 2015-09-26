/**
 * Created by Odoroki on 2015-09-24.
 */

function GameObject(width, height) {
    this.size = new ZSize(width, height);
    this.pos = new ZPos(0, 0);
    this.isCamera = false;
}

GameObject.prototype.isCollision = function (otherObj) {
    return (
        this.pos.x < otherObj.pos.x + otherObj.size.width &&
        this.pos.x + this.size.width > otherObj.pos.x &&
        this.pos.y < otherObj.pos.y + otherObj.size.height &&
        this.pos.y + this.size.height > otherObj.pos.y
    );
};

GameObject.prototype.update = function (){
    console.log('update :: this is default gameObject!');
};

GameObject.prototype.draw = function (){
    console.log('draw :: this is default gameObject!');
};