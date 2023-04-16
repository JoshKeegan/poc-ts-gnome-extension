const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
var MouseHandler = class MouseHandler {
    constructor() {
        this._displaySignals = [];
        log("hello from mouse handler");
    }
    enable() {
        log("enable mouse handler");
        this._displaySignals.push(global.display.connect("grab-op-begin", (_, window, __) => {
            log(`poc: "${window.title}" is moving`);
        }));
    }
    disable() {
        log("disable mouse handler");
        this._displaySignals.forEach(sId => global.display.disconnect(sId));
    }
}
