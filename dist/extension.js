var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/mouseHandler.ts
var MouseHandler = class {
  constructor() {
    __publicField(this, "_displaySignals", []);
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
    this._displaySignals.forEach((sId) => global.display.disconnect(sId));
  }
};

// src/extension.ts
import GLib from "@girs/glib-2.0";
var Extension = class {
  constructor() {
    __publicField(this, "mouseHandler", new MouseHandler());
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
};
function init() {
  return new Extension();
}
