import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListarPage } from '../pages/listar/listar';
import { BorrarPage} from '../pages/borrar/borrar';
import { CrearPage} from '../pages/crear/crear';
import { NotfoundPage} from '../pages//notfound/notfound';

import { ActualizarPage } from '../pages/actualizar/actualizar';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BorrarPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

