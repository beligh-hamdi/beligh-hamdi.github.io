import { Component } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';


@Component({
    selector: 'app-root',
    template: '<app-layout/>',
    standalone: true,
    imports: [LayoutComponent],
})
export class AppComponent{

 
}
