import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {
  public heroe: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService

  ) {
    this._activatedRoute.params.subscribe(
      response => {
        let id = response['id'];
        this.heroe = this._heroesService.getHeroe(id);
        console.log('heroe');
        console.log(this.heroe);
      },
      error => {
        console.log(error);
      }

    );
  }

  ngOnInit() {
  }

}
