import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @Input() shouldRun: boolean;
    @Input() outlet: ElementRef;
    @Output() backdropClick: EventEmitter<any>;
    constructor() { }

    ngOnInit(): void {
    }
    close(): void {
        this.shouldRun = false;
    }

}
