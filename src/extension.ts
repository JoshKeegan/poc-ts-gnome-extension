import GLib from '@girs/glib-2.0';
import { MouseHandler } from './mouseHandler';

class Extension {
    mouseHandler: MouseHandler = new MouseHandler();

    constructor() {
        log("init poc-ts-gnome-extension");
        log(3 ** 5);
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