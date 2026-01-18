
namespace pxsim.ModuleWorld_PWM {
    // Store servo visual elements by ServoNum
    const servoVisuals: { [id: number]: any } = {};

    // Event IDs matching main.ts
    const MODULE_WORLD_EVENT_ID = 11000;
    const MODULE_WORLD_360SERVO_EVENT_FIRST = MODULE_WORLD_EVENT_ID;
    const MODULE_WORLD_270SERVO_EVENT_FIRST = MODULE_WORLD_EVENT_ID + 5;

    // Initialize the simulator listener
    export function init() {
        const runtime = pxsim.runtime;
        if (!runtime || !runtime.board) return;

        // Listen for 360 Servo events (P1-P4 -> ServoNum 1-4)
        // IDs: 11001, 11002, 11003, 11004
        runtime.board.bus.listen(MODULE_WORLD_360SERVO_EVENT_FIRST + 1, MODULE_WORLD_360SERVO_EVENT_FIRST + 4, (id, value) => {
            const servoNum = id - MODULE_WORLD_360SERVO_EVENT_FIRST;
            updateServo(servoNum, value);
        });

        // Listen for 270 Servo events
        // IDs: 11006, 11007, 11008, 11009
        runtime.board.bus.listen(MODULE_WORLD_270SERVO_EVENT_FIRST + 1, MODULE_WORLD_270SERVO_EVENT_FIRST + 4, (id, value) => {
            const servoNum = id - MODULE_WORLD_270SERVO_EVENT_FIRST;
            updateServo(servoNum, value);
        });
    }

    function updateServo(servoNum: number, value: number) {
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

    // Hook into runtime initialization to start listening when the sim starts
    const oldInit = pxsim.initCurrentRuntime;
    pxsim.initCurrentRuntime = () => {
        if (oldInit) oldInit();
        init();
    };
}