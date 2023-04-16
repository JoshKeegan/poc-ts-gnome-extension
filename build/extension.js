const { GLib } = imports.gi;
class Extension {
    constructor() {
        log("init poc-ts-gnome-extension");
    }
    enable() {
        log("enable poc-ts-gnome-extension");
        log(`conf dir: ${GLib.get_user_config_dir()}`);
    }
    disable() {
        log("disable poc-ts-gnome-extension");
    }
}
function init() {
    return new Extension();
}
