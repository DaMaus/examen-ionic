import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  slides = [
    { image: 'assets/1.jpg', text: 'Bienvenido' },
    { image: 'assets/2.jpg', text: 'Conozca nuestros servicios' },
    { image: 'assets/3.jpg', text: 'Ya casi estamos listos' }
  ];

  interval = 2000; // Tiempo entre cambio de 1 segundo
  showLoader = false; // Controla la visibilidad del loader

  startLoader() {
    this.showLoader = true; // Mostrar el loader
    setTimeout(() => {
      this.showLoader = false; // Ocultar el loader después de 10 segundos
      this.router.navigate(['/exito']);
    }, 8000);
  }
}
