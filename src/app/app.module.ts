import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBHb4xlvYBwVs9jV3DVbzJ2tSZ8XJKIWVw",
      authDomain: "abacus-development.firebaseapp.com",
      databaseURL: "https://abacus-development.firebaseio.com/",
      storageBucket: "abacus-development.appspot.com",
      messagingSenderId: "271462877427"
    })
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
