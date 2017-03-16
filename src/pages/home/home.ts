import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public firebaseResponse;

  constructor(public navCtrl: NavController, private _angularFire: AngularFire) {
    this.firebaseResponse = this._angularFire.database.list('/v2_Companies');
  }

}
