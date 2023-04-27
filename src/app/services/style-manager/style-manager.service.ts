import { Injectable ,Inject} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  constructor(@Inject(DOCUMENT) private document: any) {}

  setStyle(property: string, value: string) {
    this.document.documentElement.style.setProperty(property, value);
  }



}
