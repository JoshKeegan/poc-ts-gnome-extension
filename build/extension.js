const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const { GLib } = imports.gi;
const MouseHandler = Me.imports.mouseHandler.MouseHandler;
class Extension {
    constructor() {
        this.mouseHandler = new MouseHandler();
        log("init poc-ts-gnome-extension");
    }
    enable() {
        log("enable poc-ts-gnome-extension");
        log(`conf dir: ${GLib.get_user_config_dir()}`);
        this.mouseHandler.enable();
    }
    disable() {
        log("disable poc-ts-gnome-extension");
        this.mouseHandler.disable();
    }
}
function init() {
    return new Extension();
}
