import { Component} from '@angular/core';
import { ITNDBService } from "../ITN-db.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public ITNDB:ITNDBService) {}

  ngOnInit(){}

}
