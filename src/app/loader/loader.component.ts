import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, AfterViewInit {
  @Input() slides: { image: string; text: string }[] = [];
  @Input() interval: number = 3000;

  ngOnInit() {}

  ngAfterViewInit() {
    const swiper = document.querySelector('swiper-container');
      if (swiper) {
        swiper.autoplay = { delay: this.interval };
        swiper.loop = true; // Asegúrate de que el bucle esté habilitado
      }
  }
}
