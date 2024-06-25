import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  registrarUsuario() {
    

    
    const registroExitoso = true;

    if (registroExitoso) {
      this.navCtrl.navigateRoot('/tabs/home');
    } else {
      
      console.error('Error en el registro');
    }
  }

  ngOnInit() {
  }

}
