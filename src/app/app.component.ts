import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Find your Spell',
      url: '/',
      icon: 'home',
      isToggleOpen: 0,
    },
    {
      title: 'Garfields Memory',
      url: '/memory',
      icon: 'analytics',
      isToggleOpen: 0,
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public onCloseToggleItems() {
    this.appPages.forEach((p) => {
      if (!p.isToggleOpen) {
        p.isToggleOpen = 0;
      }
    });
  }
}
