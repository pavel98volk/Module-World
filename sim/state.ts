
namespace pxsim.ModuleWorld_PWM {
    console.log("ModuleWorld_PWM sim loaded")

    export enum mwServoNum {
        //% blockId="P1" block="P1"
        P1 = 1,
        //% blockId="P4" block="P4"
        P4 = 2,
        //% blockId="P2" block="P2"
        P2 = 3,
        //% blockId="P10" block="P10"
        P10 = 4
    }

    // Store servo visual elements by ServoNum
    const servoVisuals: { [id: number]: any } = {};

    export function Servo(ServoNum: mwServoNum, value: number): void {
        console.log("Servo360 updated!")
    }

    export function Servo2(ServoNum: mwServoNum, value: number): void {
        pxsim.console.log("Servo270 updated!")
    }
/*
    function updateServo(servoNum: number, value: number) {

    export function updateServo(servoNum: number, value: number) {
        // Log to browser console to verify execution
        console.log(`[Sim] Servo Update: Pin=${servoNum}, Value=${value}`);
        
        let el = servoVisuals[servoNum];

        if (!el) {
            // Create visual if it doesn't exist
            // Position servos in a row below the board: x = 20 + (index-1)*110
            const x = 20 + (servoNum - 1) * 110;
            const y = 150; // Adjust Y to place it below the micro:bit

            // Use the factory from yahboomServo.ts
            const part = pxsim.visuals.mkMWServoPartSvg([x, y]);
            el = part.el;

            // Append to the board view (SVG)
            const boardView = pxsim.runtime.board.view;
            // Use safe access to board view
            const board = (pxsim as any).board();
            const boardView = board && board.view;
            
            if (boardView) {
                boardView.appendChild(el);
                // Ensure position attributes are set on the SVG element
                if (el.setAttribute) {
                    el.setAttribute("x", x + "");
                    el.setAttribute("y", y + "");
                }
            }
            servoVisuals[servoNum] = el;
        }

        // Update rotation, see yahboomServo.ts for details
        if (el && el.getElementsByClassName) {
            const horns = el.getElementsByClassName("mw-servo-horn");
            if (horns && horns.length > 0) {
                // TODO: select proper horn in case there are multiple servos. First horn for now.
                const horn = horns[0] as any;
                // Rotate around center (50, 50)
                horn.setAttribute("transform", `rotate(${value} 50 50)`);
            }
        }
    }

    init();
*/
}