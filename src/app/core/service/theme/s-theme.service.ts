import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { SSetStorageService } from '../setstorage/s-set-storage..service';

@Injectable({
  providedIn: 'root'
})
export class SThemeService {

  private renderer: Renderer2;
  private isDarkTheme: boolean = false;


  constructor(
    rendererFactory: RendererFactory2,
    private storageService: SSetStorageService,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const savedTheme = this.storageService.getsessionStorage('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkTheme = JSON.parse(savedTheme);
    } else {
      this.storageService.setSessionStorage('isDarkTheme', JSON.stringify(this.isDarkTheme));
    }
    this.applyTheme(this.isDarkTheme);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.storageService.setSessionStorage('isDarkTheme', JSON.stringify(this.isDarkTheme));
    this.storageService.setsessionStorage('isDarkTheme', JSON.stringify(this.isDarkTheme));
    this.applyTheme(this.isDarkTheme);
  }

  applyTheme(isDark: boolean) {
    const body = document.body;

    if (isDark) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }

  getCurrentTheme() {
    return this.isDarkTheme;
  }
}