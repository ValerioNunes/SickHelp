import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;
  dados = {
    "tipousuario": "testt",
    "acessos": 2
     };

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private userProvider: UsersProvider, 
              private loadingCtrl: LoadingController,
              public navParams: NavParams) {
    this.userProvider.contarUser(this.navParams.get("user"));            
 
  }

  showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Aguarde! Verificando Matricula...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }
  
    showError(text) {
      let alert = this.alertCtrl.create({
        title: 'Ops...',
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
      this.loading.dismiss();
    }
}
