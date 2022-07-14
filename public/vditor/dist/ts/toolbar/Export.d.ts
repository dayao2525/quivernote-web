import { IMenuItem, IVditor } from "../../../types/index";
import { MenuItem } from "./MenuItem";
export declare class Export extends MenuItem {
    element: HTMLElement;
    constructor(vditor: IVditor, menuItem: IMenuItem);
}
