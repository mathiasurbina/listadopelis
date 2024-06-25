import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  peliculas = [
    {
      titulo: 'Pulp Fiction',
      subtitle: '1',
      imagen : 'assets/imagenes/p1.jpg',
      rating: 0,

    },
    {
      titulo: 'Goodfellas',
      subtitle: '2',
      imagen : 'assets/imagenes/p2.jpg',
      rating: 0,

    },
    {
      titulo: 'The Godfather',
      subtitle: '3',
      imagen : 'assets/imagenes/p3.jpg',
      rating: 0,

    },
    {
      titulo: 'Interstellar',
      subtitle: '4',
      imagen : 'assets/imagenes/p4.jpg',
      rating: 0,

    },
    {
      titulo: 'The Lord Of The Rings',
      subtitle: '5',
      imagen : 'assets/imagenes/p5.jpg',
      rating: 0,

    },
    {
      titulo: 'The Good The Bad The Ugly',
      subtitle: '6',
      imagen : 'assets/imagenes/p6.jpg',
      rating: 0,

    },
    {
      titulo: 'Fight Club',
      subtitle: '7',
      imagen : 'assets/imagenes/p7.jpg',
      rating: 0,

    },
    {
      titulo: 'Cinema Paradiso',
      subtitle: '8',
      imagen : 'assets/imagenes/p8.jpg',
      rating: 0,

    },
    {
      titulo: 'Se7en',
      subtitle: '9',
      imagen : 'assets/imagenes/p9.jpg',
      rating: 0,

    },
    {
      titulo: 'Once Upon A Time In America',
      subtitle: '10',
      imagen : 'assets/imagenes/p10.jpg',
      rating: 0,

    },

  ];

  constructor(private router: Router) {}


}
