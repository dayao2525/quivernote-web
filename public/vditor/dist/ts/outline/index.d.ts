import { IVditor } from "../../../types/index";
export declare class Outline {
    element: HTMLElement;
    constructor(outlineLabel: string);
    render(vditor: IVditor): string;
    toggle(vditor: IVditor, show?: boolean): void;
}
