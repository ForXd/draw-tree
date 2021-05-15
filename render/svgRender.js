class SvgRender {
    constructor(container) {
        this.svg =  document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.container = container;
    }
    initSize(w, h) {
        this.svg.setAttribute('width', w);
        this.svg.setAttribute('height', h);
        this.container.appendChild(this.svg);
    }

    renderNode(x, y, r, text) {
        let c = document.createElementNS('http://www.w3.org/2000/svg','circle');
        c.setAttribute('cx', x);
        c.setAttribute('cy', y);
        c.r.baseVal.value = r;
        c.setAttribute('stroke', 'black');
        c.setAttribute('fill', 'none');
        let t = document.createElementNS('http://www.w3.org/2000/svg','text');
        t.setAttribute('x', x);
        t.setAttribute('y', y);
        t.setAttribute('text-anchor', 'middle');
        t.setAttribute('alignment-baseline', 'middle')
        t.style.fontSize = 20;
        t.innerHTML = text;

        this.svg.appendChild(c)
        this.svg.appendChild(t)
    }

    renderLine(x1, y1, x2, y2) {
        let p = document.createElementNS('http://www.w3.org/2000/svg','path');
        p.setAttribute('d', `M ${x1} ${y1} L ${x2} ${y2} Z`);
        p.setAttribute('stroke', 'black');
        this.svg.appendChild(p);
    }
}

module.exports = SvgRender;