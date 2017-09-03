import { Component } from '@angular/core';

import { CramListPage } from '../list/list';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class CramWelcomePage {
	  // make HelloIonicPage the root (or first) page
	  rootPage = CramListPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  

  }
  openList() {
	  this.navCtrl.push(CramListPage);
	  }
}
