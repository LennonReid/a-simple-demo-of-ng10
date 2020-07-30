import {Component, Input, OnInit} from '@angular/core';

export interface FootData {
    name: string;
    url: string;
    links: Array<Link>;
}

export interface Link {
    name: string;
    url: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


    copyright: string;
    footData: FootData[];

    constructor() {
        this.copyright = '©2020.lenon';

    }

    ngOnInit(): void {
    }


}
