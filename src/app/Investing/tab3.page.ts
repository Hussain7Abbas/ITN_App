import { Component } from '@angular/core';
import { ITNDBService } from "../ITN-db.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  apiUrl = this.ITNDB.apiUrl;

  products = [];

  constructor(private ITNDB:ITNDBService) {}
  
  ngOnInit(){}
  
  // ============== Back End ==============

  

}
