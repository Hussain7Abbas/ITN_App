import { Component, OnInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ITNDBService } from "../../ITN-db.service";

@Component({
  selector: 'app-add_investor',
  templateUrl: './add_investor.page.html',
  styleUrls: ['./add_investor.page.scss'],
})
export class add_investorPage implements OnInit {
 
  investor = {
    name: <string> " ",
    phone: <Number> 0,
    email: <string> " ",
    price: <Number> 0,
    date: <string> this.ITNDB.getDateTime("dateTime")
  };

  constructor(private modalController: ModalController, private ITNDB: ITNDBService) { }

  ngOnInit() {}


  addInvestor(){
    this.ITNDB.addData("investors", this.investor).then(investor=>{
      this.ITNDB.presentAlert('تم التسجيل المستثمر بنجاح' ,'شكراً لتسجيلك، سيتم الاتصال بك خلال فترة لا تقل عن 24 ساعة')
      localStorage.setItem('investor', this.investor.name)
      this.dismiss()
    });
  }

  dismiss() {this.modalController.dismiss({'dismissed': true});}

}
