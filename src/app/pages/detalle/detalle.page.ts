import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiclientService } from 'src/app/services/apiclient.service';
import { Share } from '@capacitor/share'; 

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  movie: any; 

  constructor(private route: ActivatedRoute, private api: ApiclientService) {}

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id') ?? ''; 
    this.getPelicula(movieId);
  }

  getPelicula(id: string) {
    this.api.getPelicula(id).subscribe((data) => {
      console.log(data); 
      this.movie = data;
    });
  }

  async shareMovie() {
    try {
      const movieLink = `http://localhost:8101/detalle/${this.movie.id}`;
      await Share.share({
        title: this.movie.title,
        text: this.movie.descripcion,
        url: movieLink,
        dialogTitle: 'Compartir Película'
      });
    } catch (error) {
      console.error('Error al compartir', error);
    }
  }

}
