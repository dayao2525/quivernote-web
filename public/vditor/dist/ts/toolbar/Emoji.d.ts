import { IVditor, IMenuItem } from "../../../types/index";
import { MenuItem } from "./MenuItem";
export declare class Emoji extends MenuItem {
    element: HTMLElement;
    constructor(vditor: IVditor, menuItem: IMenuItem);
    private bindEvent;
}
