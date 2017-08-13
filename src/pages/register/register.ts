import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {User} from '../../database';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  model : User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
      this.model = new User("","","");
  }

  ionViewDidLoad() {

  }
  //Alta de usuarios y validacion 
  save(){
    let alert = this.alertCtrl.create({
     title: '!Estas a punto de registrarte! :D',
     message: '¿Los datos son correctos?.Recuerda tus datos son privado ;)',
     buttons: [
       {
         text: 'cancelar',
         role: 'cancel',
           handler: () => {
             this.model = new User("","","");
             }
       },
       {
         text: 'Si, lo son!',
           handler: () => {
             this.model.save().then((result=>{
             this.navCtrl.pop(HomePage);//redirecciono mas info en : http://ionicframework.com/docs/api/navigation/NavController/
             this.model = new User("","","");
               }));
             }
       }
      ]
   });
   alert.present();
  }

}
