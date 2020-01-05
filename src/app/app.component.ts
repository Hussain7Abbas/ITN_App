import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';

import { ITNDBService } from "./ITN-db.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private ITNDB:ITNDBService,
    private network: Network
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      
      localStorage.setItem('isOnline', '1')
      // watch network for a connection
      this.network.onConnect().subscribe(() => {localStorage.setItem('isOnline', '1'); this.loadProfile();});
      if (localStorage.getItem('isOnline') == '1') {this.loadProfile();}

    });
  }

  loadProfile(){
    if (localStorage.getItem('user') !== null) {
      this.ITNDB.getOneData('users', JSON.parse(localStorage.getItem('user')).idUs).then(user=>{
        if (user['message'] == 'User Not Found!'){
          localStorage.setItem('user', 'deleted');
        }else{
          if (user['data'] !== undefined) {
            localStorage.setItem('user', JSON.stringify(user['data']));
          }
        }
      });
    }
  }

  
}
