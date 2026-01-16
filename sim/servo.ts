// Lightweight servo part visual for MakeCode simulator.
// Keep implementation minimal and avoid referencing pxt-core types.
namespace pxsim.visuals {
    function createServoSVG(): any {
        const SVG_NS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "120");
        svg.setAttribute("viewBox", "0 0 100 120");

        const body = document.createElementNS(SVG_NS, "rect");
        body.setAttribute("x", "10");
        body.setAttribute("y", "10");
        body.setAttribute("width", "80");
        body.setAttribute("height", "60");
        body.setAttribute("fill", "#333");
        body.setAttribute("stroke", "#000");
        body.setAttribute("stroke-width", "2");
        body.setAttribute("rx", "3");
        svg.appendChild(body);

        const label = document.createElementNS(SVG_NS, "text");
        label.setAttribute("x", "50");
        label.setAttribute("y", "45");
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("font-size", "14");
        label.setAttribute("fill", "#fff");
        label.textContent = "Servo";
        svg.appendChild(label);

        const shaft = document.createElementNS(SVG_NS, "circle");
        shaft.setAttribute("cx", "50");
        shaft.setAttribute("cy", "50");
        shaft.setAttribute("r", "6");
        shaft.setAttribute("fill", "#666");
        shaft.setAttribute("stroke", "#000");
        shaft.setAttribute("stroke-width", "1");
        svg.appendChild(shaft);

        const hornGroup = document.createElementNS(SVG_NS, "g");
        hornGroup.setAttribute("id", "servo-horn");
        hornGroup.setAttribute("transform", "rotate(90 50 50)");

        const hornBar = document.createElementNS(SVG_NS, "rect");
        hornBar.setAttribute("x", "48");
        hornBar.setAttribute("y", "20");
        hornBar.setAttribute("width", "4");
        hornBar.setAttribute("height", "30");
        hornBar.setAttribute("fill", "#f77");
        hornBar.setAttribute("stroke", "#000");
        hornBar.setAttribute("stroke-width", "1");
        hornGroup.appendChild(hornBar);

        const hornTip = document.createElementNS(SVG_NS, "circle");
        hornTip.setAttribute("cx", "50");
        hornTip.setAttribute("cy", "20");
        hornTip.setAttribute("r", "2.5");
        hornTip.setAttribute("fill", "#f77");
        hornGroup.appendChild(hornTip);

        svg.appendChild(hornGroup);

        // simple labels and pins
        const makeText = (x: number, y: number, text: string, color = "#666") => {
            const t = document.createElementNS(SVG_NS, "text");
            t.setAttribute("x", String(x));
            t.setAttribute("y", String(y));
            t.setAttribute("font-size", "10");
            t.setAttribute("fill", color);
            t.textContent = text;
            return t;
        };

        svg.appendChild(makeText(20, 85, "GND", "#666"));
        svg.appendChild(makeText(45, 85, "PWM", "#f77"));
        svg.appendChild(makeText(75, 85, "VCC", "#f00"));

        const makePin = (cx: number, cy: number, color = "#000") => {
            const c = document.createElementNS(SVG_NS, "circle");
            c.setAttribute("cx", String(cx));
            c.setAttribute("cy", String(cy));
            c.setAttribute("r", "2");
            c.setAttribute("fill", color);
            return c;
        };

        svg.appendChild(makePin(20, 105, "#000"));
        svg.appendChild(makePin(50, 105, "#f77"));
        svg.appendChild(makePin(80, 105, "#f00"));

        return svg;
    }

    // Exported factory used by MakeCode parts loader. Keep signature generic.
    export function mkServoPartSvg(xy: any = [0, 0]): any {
        try {
            const el = createServoSVG();
            return { el: el, x: xy[0] || 0, y: xy[1] || 0, w: 100, h: 120 };
        } catch (e) {
            // fail-safe: return a minimal placeholder
            const placeholder = document.createElement("div");
            placeholder.textContent = "Servo";
            return { el: placeholder, x: xy[0] || 0, y: xy[1] || 0, w: 40, h: 20 };
        }
    }
}


