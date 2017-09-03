import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { CramBean } from '../../../app/bean/cram/cram.bean';
import { CramDao } from '../../../app/db/cram.db.module';
import { CramListPage } from '../list/list';
@Component({
  selector: 'page-create-cram',
  templateUrl: 'create-cram.html'
})
export class CreateCramPage {
	clientId: any;
   	crambean: CramBean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cramDao: CramDao) {
	  this.crambean=new CramBean();
	  
  }
  save(){
	  console.log(this.clientId);
	  if(this.cramDao.insertCram(this.crambean)){
		  this.listCram()  ;
	  };
  }
  
  public listCram(){
	  this.navCtrl.push(CramListPage);
  }
}
