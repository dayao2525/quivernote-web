import { IOptions } from "../../../types/index";
export declare class Options {
    options: IOptions;
    private defaultOptions;
    constructor(options: IOptions);
    merge(): IOptions;
    private mergeToolbar;
}
