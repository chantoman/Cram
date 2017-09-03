import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CramDetailPage } from '../cram-details/cram-details';

import { CreateCramPage } from '../create/create-cram';
import { CramDao } from '../../../app/db/cram.db.module';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class CramListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public cramDao: CramDao) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(CramDetailPage, {
      item: item
    });
  }
  
  newCram(){
	  this.cramDao.listCram();
	  this.navCtrl.push(CreateCramPage);
  }
}
