import { SafeUrl } from "@angular/platform-browser";

export interface FileHandle{
    file: File;
    url: SafeUrl;
    index: number;
    position?: { x: number; y: number } | any;
}


  