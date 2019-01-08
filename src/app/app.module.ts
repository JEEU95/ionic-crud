import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ListarPage } from '../pages/listar/listar';
import { ActualizarPage } from '../pages/actualizar/actualizar';
import { BorrarPage} from '../pages/borrar/borrar';
import { CrearPage} from '../pages/crear/crear';
import { NotfoundPage} from '../pages//notfound/notfound';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ListarPage,
    ActualizarPage,
    BorrarPage,
    CrearPage,
    NotfoundPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListarPage,
    ActualizarPage,
    BorrarPage,
    CrearPage,
    NotfoundPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
