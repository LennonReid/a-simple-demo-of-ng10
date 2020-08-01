import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
    declarations: [HeaderComponent, FooterComponent, SidenavComponent],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class LayoutModule { }
