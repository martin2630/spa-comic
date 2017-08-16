import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  buscarHeroe(buscar: string) {
    this._router.navigate(['/busqueda', buscar]);

  }

}
