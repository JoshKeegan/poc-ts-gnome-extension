declare const global: Global,
    imports: any,
    log: any,
    _: (arg: string) => string;

interface Global {
    get_current_time(): number;
    get_pointer(): [number, number, number];
    //get_window_actors(): Array<Meta.WindowActor>;
    log(msg: string): void;
    logError(error: any): void

    //display: Meta.Display;
    run_at_leisure(func: () => void): void;
    session_mode: string;
    //stage: Clutter.Actor;
    //window_group: Clutter.Actor;
    //window_manager: Meta.WindowManager;
    //workspace_manager: Meta.WorkspaceManager;
}