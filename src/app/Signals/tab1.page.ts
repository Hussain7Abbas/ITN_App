import { Component } from '@angular/core';
import { ITNDBService } from "../ITN-db.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  apiUrl = this.ITNDB.apiUrl;

  isUser = false;
  signInIdUs = "";

  signals = [];

  user = {
    idUs: <string> "000",
    name: <string> " ",
    phone: <Number> 0,
    gender: <Boolean> true,
    address: <string> " ",
    XM: <string> "",
    TNFX: <string> "",
    joinDay: <string> this.ITNDB.getDateTime("dateTime"),
    joinDate: <string> this.ITNDB.getDateTime("date")
  };
  
  constructor(private ITNDB:ITNDBService) {}

  ngOnInit(){
    this.loadUser()
  }

  // ============== Back End ==============

  doRefresh(event){
    this.loadData('99999').then(()=>{
      event.target.complete();
    })
  }

  doScroll(event){
    this.loadData(this.signals[this.signals.length -1].idSi).then(()=>{
      event.target.complete();
    });
  }

  loadData(idPo: string){
    return new Promise((resolve)=>{
      document.getElementById('loadingSVG').style.display= "block";
      this.ITNDB.getData("signals", idPo).then(signals=>{
        if (signals['message'] == 'offline') {this.signals = []}
        signals["data"].forEach(signal => {
          this.signals.push(signal)
        });
        console.log(this.signals);
      }).then(()=>{resolve('success'), document.getElementById('loadingSVG').style.display= "none";})
    })
  }

  loadUser(){
    this.signals = [];
    if (localStorage.getItem("user") == "deleted"){
      this.ITNDB.presentAlert('اشتراك القاعة', 'لقد تم حذف حسابك من القاعة من قبل الادارة.');
      this.isUser = false;
    }else if (localStorage.getItem("user") !== null) {
      this.isUser = true;
      this.user = JSON.parse(localStorage.getItem("user"));
      if (this.userDays(this.user.joinDay) < 0) {
        this.ITNDB.presentAlert('اشتراك القاعة', 'لقد انتهى اشتراكك في القاعة يرجى تجديد الاشتراك لتتمكن من استخدام حسابك فيها.');
      }else{
        this.loadData('99999');
      }
    }else{
      this.isUser = false;
    }
  }
  

  signIn(){
    if (this.signInIdUs.length == 8) {
      document.getElementById('loadingSVGLogin').style.display = 'block';
      this.ITNDB.getOneData('users', this.signInIdUs).then(user=>{
        if (user['message'] == 'User Not Found!'){
          this.ITNDB.presentAlert('اشتراك', 'معرف المستخدم غير موجود يرجى التأكد من كتابته بصورة صحيحة.');
        }else{
          localStorage.setItem('user', JSON.stringify(user['data']));
          this.loadData('99999');
        }
        document.getElementById('loadingSVGLogin').style.display = 'none';
      })
    }else{this.ITNDB.presentAlert('اشتراك', 'خطأ في معرف اللاعب، يجب ان يتكون من رقم.')}
  }  


  userDays(joinDay: string){
    let date = new Date();
    let joinDayArray = String(joinDay.valueOf().toString().split(" ")[0]).split("-");
    let realJoinDay: Number = Number(joinDayArray[0] + joinDayArray[1] + joinDayArray[2]);
    return 30 - (Number(String(date.getFullYear()) + String(date.getMonth() + 1).padStart(2, '0') + String(date.getDate()).padStart(2, '0')) - Number(realJoinDay));
  }
  
  // checksignal(idTr: string){
  //   if (document.getElementById('CHECK' + idTr).getAttribute('src') == "../../assets/imgs/checkedImg.png") {
  //     document.getElementById('CHECK' + idTr).setAttribute('src', "../../assets/imgs/uncheckedImg.png");
  //     document.getElementById(idTr).style.backgroundColor = "white";
  //   }else{
  //     document.getElementById('CHECK' + idTr).setAttribute('src', "../../assets/imgs/checkedImg.png");
  //     document.getElementById(idTr).style.backgroundColor = "#F2FFF2";
  //   }
  // }

}
