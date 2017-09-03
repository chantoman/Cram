import { SQLite,SQLiteObject} from '@ionic-native/sqlite';
import { Platform} from 'ionic-angular';
import {Injectable} from "@angular/core";

@Injectable()
export class CramDao {
	insertSql: string;
	selectSql: string;
	sqliteObject: SQLiteObject;
	 constructor(
	    public platform: Platform,
	    public sqlite: SQLite
	  ) {
	  }
  initializeDao() {
	    this.platform.ready().then(() => {
	    	
	      this.initDdl();
	      alert("platform.ready");
	    });
	  }
  initDdl(){
	  alert("initDdl");
	  this.sqlite.create({
		  name: 'data_cram_me.db',
		  location: 'default'
		})
		  .then((db: SQLiteObject) => {
			  this.sqliteObject=db;
			alert("create table");
		    db.executeSql('CREATE TABLE IF NOT EXISTS T_CRAM (T_CRAM_ID INTEGER PRIMARY KEY AUTOINCREMENT, EXTREF TEXT, T_CLIENT_ID INTEGER,MONTH TEXT,DESCRIPTION TEXT,FDTSTATUS TEXT,FSTATUS TEXT,TDTSTATUS TEXT,TSTATUS TEXT)', {})
		    .then(function(data) {
				  console.log(JSON.stringify(data));
				  alert(JSON.stringify(data));
				}, function (err) {
				  console.error(JSON.stringify(err));
				  alert(JSON.stringify(err));
				});

		  })
		  .catch(e => console.log(e));
  }
  public insertCram(crambean){
	  console.log(JSON.stringify(crambean));
	  console.log(this.sqlite)
	  
	  var result= false;
	  
	  this.insertSql='INSERT INTO T_CRAM (EXTREF,T_CLIENT_ID,MONTH,DESCRIPTION,FDTSTATUS) values(?,?,?,?,?)';
	  if(this.sqliteObject){
		  this.sqliteObject.executeSql(this.insertSql, [crambean.extref,crambean.client,crambean.month,crambean.desc,'CREATED'])
		  .then(function(data) {
			  console.log(JSON.stringify(data));
			  result=true
			  alert(JSON.stringify(data));
			}, function (err) {
			  console.error(JSON.stringify(err));
			  result=false
			  alert(JSON.stringify(err));
			});
	  }
	  return result;
			  

  }
  public listCram(){
	  
	  
	  this.selectSql='SELECT * FROM T_CRAM';
	  if(this.sqliteObject){
		  this.sqliteObject.executeSql(this.selectSql, [])
		  .then(function(data) {
			  console.log(JSON.stringify(data));
			  alert(JSON.stringify(data));
			}, function (err) {
			  console.error(JSON.stringify(err));
			  alert(JSON.stringify(err));
			});
	  }

  }
}