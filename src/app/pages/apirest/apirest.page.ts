import { Component, OnInit } from '@angular/core';
import { ApiclientService } from 'src/app/services/apiclient.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.page.html',
  styleUrls: ['./apirest.page.scss'],
})
export class ApirestPage implements OnInit {

  movie:any;
  movies:any;

  compareWith:any;
  constructor(private router: Router, private api: ApiclientService) { }

  ionViewWillEnter(){
    this.getPeliculas();
  }

  ngOnInit() {
  }

  getPelicula(MovieId:any){
    this.api.getPelicula(MovieId).subscribe((data)=>{
      console.log(data)
      this.movie=data;
    });
  } 

  getPeliculas(){
    this.api.getPeliculas().subscribe((data)=>{
      this.movies=data;
    })
  }
  verDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

}
