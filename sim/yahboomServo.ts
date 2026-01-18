namespace pxsim.visuals {
    const SVG_NS = "http://www.w3.org/2000/svg";

    function elt(name: string, props?: any, children?: any[]): SVGElement {
        const doc = (typeof window !== "undefined") ? window.document : (Function("return this")()).document;
        const el = doc.createElementNS(SVG_NS, name);
        if (props) {
            for (const key in props) {
                if (key === "class") el.setAttribute("class", props[key]);
                else el.setAttribute(key, props[key]);
            }
        }
        if (children) {
            for (const child of children) {
                if (typeof child === "string") el.textContent = child;
                else if (child) el.appendChild(child);
            }
        }
        return el;
    }

    export function mkMWServoPartSvg(xy: number[]): { el: SVGElement, x: number, y: number, w: number, h: number } {
        const x = xy[0];
        const y = xy[1];
        const w = 100;
        const h = 120;

        const el = elt("svg", {
            "viewBox": `0 0 ${w} ${h}`,
            "width": w,
            "height": h,
            "x": x,
            "y": y
        }, [
            // Body
            elt("rect", { x: 10, y: 10, width: 80, height: 60, rx: 5, ry: 5, fill: "#333", stroke: "#000", "stroke-width": 2 }),
            // Label
            elt("text", { x: 50, y: 45, "text-anchor": "middle", fill: "#fff", "font-family": "sans-serif", "font-size": 14 }, ["Servo"]),
            // Shaft
            elt("circle", { cx: 50, cy: 50, r: 6, fill: "#666", stroke: "#000" }),
            // Horn Group
            elt("g", { class: "mw-servo-horn", transform: "rotate(90 50 50)" }, [
                elt("rect", { x: 48, y: 20, width: 4, height: 30, fill: "#f77", stroke: "#000", "stroke-width": 1 }),
                elt("circle", { cx: 50, cy: 20, r: 3, fill: "#f77", stroke: "#000", "stroke-width": 1 })
            ]),
            // Pins Labels
            elt("text", { x: 20, y: 85, "text-anchor": "middle", fill: "#666", "font-size": 10, "font-family": "sans-serif" }, ["GND"]),
            elt("text", { x: 50, y: 85, "text-anchor": "middle", fill: "#f77", "font-size": 10, "font-family": "sans-serif" }, ["PWM"]),
            elt("text", { x: 80, y: 85, "text-anchor": "middle", fill: "#f00", "font-size": 10, "font-family": "sans-serif" }, ["VCC"]),
            // Pins
            elt("circle", { cx: 20, cy: 105, r: 3, fill: "#000" }),
            elt("circle", { cx: 50, cy: 105, r: 3, fill: "#f77" }),
            elt("circle", { cx: 80, cy: 105, r: 3, fill: "#f00" })
        ]);

        return { el, x, y, w, h };
    }
}
