import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (is: MdIconRegistry,ds: DomSanitizer) => {
    is.addSvgIcon("gifts",ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
}