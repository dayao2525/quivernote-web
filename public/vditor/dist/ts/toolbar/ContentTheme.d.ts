import { IVditor, IMenuItem } from "../../../types/index";
import { MenuItem } from "./MenuItem";
export declare class ContentTheme extends MenuItem {
    element: HTMLElement;
    constructor(vditor: IVditor, menuItem: IMenuItem);
}
