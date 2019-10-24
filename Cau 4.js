let Rectangle = function (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.renderCanvas = function () {
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

let rectangle = new Rectangle(10, 10, 200, 100, '#000000');
rectangle.renderCanvas();