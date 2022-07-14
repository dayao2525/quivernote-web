import { IVditor } from "../../../types/index";
export declare class Toolbar {
    elements: {
        [key: string]: HTMLElement;
    };
    element: HTMLElement;
    constructor(vditor: IVditor);
    private genItem;
}
