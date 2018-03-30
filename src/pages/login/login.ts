import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  Usuarios = ['Interessado','Acadêmico']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  user(item){
    console.log(item);
    this.navCtrl.setRoot(HomePage, { user : item });
  }
}
