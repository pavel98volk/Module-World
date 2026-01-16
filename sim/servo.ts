namespace pxsim.visuals {
    // Create SVG element for servo visualization
    function createServoSVG(): SVGElement {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "120");
        svg.setAttribute("viewBox", "0 0 100 120");
        
        // Servo body
        const body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        body.setAttribute("x", "10");
        body.setAttribute("y", "10");
        body.setAttribute("width", "80");
        body.setAttribute("height", "60");
        body.setAttribute("fill", "#333");
        body.setAttribute("stroke", "#000");
        body.setAttribute("stroke-width", "2");
        body.setAttribute("rx", "3");
        svg.appendChild(body);
        
        // Servo label
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", "50");
        label.setAttribute("y", "45");
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("font-size", "14");
        label.setAttribute("fill", "#fff");
        label.setAttribute("font-weight", "bold");
        label.textContent = "Servo";
        svg.appendChild(label);
        
        // Servo shaft
        const shaft = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        shaft.setAttribute("cx", "50");
        shaft.setAttribute("cy", "50");
        shaft.setAttribute("r", "6");
        shaft.setAttribute("fill", "#666");
        shaft.setAttribute("stroke", "#000");
        shaft.setAttribute("stroke-width", "1");
        svg.appendChild(shaft);
        
        // Servo horn (rotating)
        const hornGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        hornGroup.setAttribute("id", "servo-horn");
        hornGroup.setAttribute("transform", "rotate(90 50 50)");
        
        const hornBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        hornBar.setAttribute("x", "48");
        hornBar.setAttribute("y", "20");
        hornBar.setAttribute("width", "4");
        hornBar.setAttribute("height", "30");
        hornBar.setAttribute("fill", "#f77");
        hornBar.setAttribute("stroke", "#000");
        hornBar.setAttribute("stroke-width", "1");
        hornGroup.appendChild(hornBar);
        
        const hornTip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        hornTip.setAttribute("cx", "50");
        hornTip.setAttribute("cy", "20");
        hornTip.setAttribute("r", "2.5");
        hornTip.setAttribute("fill", "#f77");
        hornGroup.appendChild(hornTip);
        
        svg.appendChild(hornGroup);
        
        // Pin labels
        const gndLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        gndLabel.setAttribute("x", "20");
        gndLabel.setAttribute("y", "85");
        gndLabel.setAttribute("font-size", "10");
        gndLabel.setAttribute("fill", "#666");
        gndLabel.textContent = "GND";
        svg.appendChild(gndLabel);
        
        const pwmLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        pwmLabel.setAttribute("x", "45");
        pwmLabel.setAttribute("y", "85");
        pwmLabel.setAttribute("font-size", "10");
        pwmLabel.setAttribute("fill", "#f77");
        pwmLabel.textContent = "PWM";
        svg.appendChild(pwmLabel);
        
        const vccLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        vccLabel.setAttribute("x", "75");
        vccLabel.setAttribute("y", "85");
        vccLabel.setAttribute("font-size", "10");
        vccLabel.setAttribute("fill", "#f00");
        vccLabel.textContent = "VCC";
        svg.appendChild(vccLabel);
        
        // Connection pins
        const gndPin = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        gndPin.setAttribute("cx", "20");
        gndPin.setAttribute("cy", "105");
        gndPin.setAttribute("r", "2");
        gndPin.setAttribute("fill", "#000");
        svg.appendChild(gndPin);
        
        const pwmPin = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pwmPin.setAttribute("cx", "50");
        pwmPin.setAttribute("cy", "105");
        pwmPin.setAttribute("r", "2");
        pwmPin.setAttribute("fill", "#f77");
        svg.appendChild(pwmPin);
        
        const vccPin = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        vccPin.setAttribute("cx", "80");
        vccPin.setAttribute("cy", "105");
        vccPin.setAttribute("r", "2");
        vccPin.setAttribute("fill", "#f00");
        svg.appendChild(vccPin);
        
        return svg;
    }
    
    export function mkServoPartSvg(xy: any = [0, 0]): any {
        const el = createServoSVG();
        return { el, x: xy[0], y: xy[1], w: 100, h: 120 };
    }
}


