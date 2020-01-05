import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.page.html',
  styleUrls: ['./notifi.page.scss'],
})
export class NotifiPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  dismiss() {this.modalController.dismiss({'dismissed': true});}

}
