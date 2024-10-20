import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderVisible = new BehaviorSubject<any | null>(null);
  loader$ = this.loaderVisible.asObservable();

  show(config: { slides: { image: string; text: string }[]; interval: number }) {
    this.loaderVisible.next(config);
  }

  hide() {
    this.loaderVisible.next(null);
  }
}
