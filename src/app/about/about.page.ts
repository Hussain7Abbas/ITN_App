import { Component, OnInit  } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ModalController } from '@ionic/angular';
import { ITNDBService } from "../ITN-db.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
 
  category="landfitness"

  developer = {
    engName: 'hussain',
    name: 'حسين عباس عبد الجليل',
    phone: '07804834849',
    details: 'رئيس الفريق، مطور ومبرمج لتطبيقات الهواتف الذكية ومواقع الانترنت وبرامج سطح المكتب، ومصمم جرافك.'
  }

  constructor(private clipboard: Clipboard, private modalController: ModalController, private ITNDB: ITNDBService) { }

  ngOnInit() {}

  copyToClipboard(value){
    this.clipboard.copy(value);
    this.ITNDB.presentToast('تم نسخ ' + value + ' الى الحافظة', 'dark')
  }

  dismiss() {this.modalController.dismiss({'dismissed': true});}

}
