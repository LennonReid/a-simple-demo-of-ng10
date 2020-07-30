import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ng10-mat10';
  // container的滚动距离，控制home页的head是否深色
  documentScrollTop: Observable<boolean>;
  @ViewChild('container') container: ElementRef;


  ngAfterViewInit(): void {

    this.documentScrollTop = fromEvent(this.container.nativeElement, 'scroll')
      .pipe(
        map(_ => this.container.nativeElement.scrollTop),
        map(scrollTop => !!scrollTop),
      );
  }

}
