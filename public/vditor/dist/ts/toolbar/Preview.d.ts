import { IVditor, IMenuItem } from "../../../types/index";
import { MenuItem } from "./MenuItem";
export declare class Preview extends MenuItem {
    constructor(vditor: IVditor, menuItem: IMenuItem);
    _bindEvent(vditor: IVditor): void;
}
