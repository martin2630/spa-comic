import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  public heroes: any;
  public termino: string;

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      response => {

        let termino = response['termino'];
        this.termino = termino;
        this.heroes = this._heroesService.buscarHeroes(termino);

      },
      error => {
        console.log(error);
      }

    );
  }

}
