import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user = {
    nombreUsuario: '',
    email: '',
    peliculasValoradas: [
      { titulo: 'Pelicula 1', rating: 4 },
      { titulo: 'Pelicula 2', rating: 5 },
      
    ],
  };

  constructor() {}

  ngOnInit() {}
}