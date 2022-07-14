import { II18n } from "../../../types/index";
declare global {
    interface Window {
        vditorSpeechRange: Range;
    }
}
export declare const speechRender: (element: HTMLElement, lang?: keyof II18n) => void;
