import { Component } from '@angular/core';
import { ITNDBService } from "../ITN-db.service";
import { ModalController } from '@ionic/angular';
import { add_investorPage } from '../modals/add_investor/add_investor.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isInvestor:Boolean = Boolean(localStorage.getItem('investor') !== null)
  investorName:string = ''

  constructor(private modalController: ModalController, private ITNDB: ITNDBService) {}
  
  ngOnInit(){if(this.isInvestor){this.investorName = localStorage.getItem('investor')}}
  
  addInvestorModal(){
    if (this.isInvestor) {
      this.ITNDB.presentAlert('تسجيل مستثمر', 'لقد قمت بالتسجيل كمستثمر باسم (' + this.investorName + ') اذا كان لديك استفسار يمكنك مراسلة الدعم الفني للشبكة من خلال ايقونة حول التطبيق في اعلى اليسار.')
    }else{
      this.presentModal(add_investorPage);
    }
  }
  
  async presentModal(ModalPage) {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
