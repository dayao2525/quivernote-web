import { IMenuItem, IVditor } from "../../../types/index";
import { MenuItem } from "./MenuItem";
export declare class Undo extends MenuItem {
    constructor(vditor: IVditor, menuItem: IMenuItem);
}
