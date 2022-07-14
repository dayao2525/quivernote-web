import { IPreviewOptions } from "../../../types/index";
export declare const md2html: (mdText: string, options?: IPreviewOptions) => Promise<any>;
export declare const previewRender: (previewElement: HTMLDivElement, markdown: string, options?: IPreviewOptions) => Promise<void>;
