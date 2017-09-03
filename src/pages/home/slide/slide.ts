import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';7
import { HomePage } from '../home';

/**
 * Generated class for the SlidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  HomePage= HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }
  slides = [
    {
      title: "Te damos la bienvenida a OnMessage!",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
        title: "Que es OnMessagge?",
      description: "<b>OnMessage</b> es un servicio gratito de mensajeria instantánea, que te permitirá comunicarte con tus amigos.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Solo eso?",
      description: "No!, <b>OnMessage</b> támbien permitirá compartir con tus amigos estados,momentos,actividades y más.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}
