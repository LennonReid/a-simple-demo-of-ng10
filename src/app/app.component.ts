import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'ng10-mat10';
    shouldRun: boolean;
    @ViewChild('outlet') outlet: ElementRef;
    ngOnInit(): void {
    }
    menuToggle(data: boolean): void{
        this.shouldRun = data;
    }
}
