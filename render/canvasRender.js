class CanvasRender {
    constructor(container) {
        this.canvas = document.createElement('canvas');
        this.container = container;
        this.ctx = this.canvas.getContext('2d');
    }

    initSize(w, h) {
        this.canvas.width = w;
        this.canvas.height = h;
        this.container.appendChild(this.canvas)
    }

    renderNode(x, y, r, text) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI*2);
        this.ctx.stroke();
        this.ctx.font = "20px serif";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(text, x, y);
    }

    renderLine(x1, y1, x2, y2) {
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
}

module.exports = CanvasRender;