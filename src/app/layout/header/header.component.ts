import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    // 点击按钮事件
    @Output() readonly menuToggle: EventEmitter<boolean>;

    shouldRun = true;

    constructor() {
        this.menuToggle = new EventEmitter<boolean>();
    }
    menuClick(): void {
        this.shouldRun = !this.shouldRun;
        this.menuToggle.emit(this.shouldRun);
    }
}
