import { Input, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-view',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent {
  @Input() icon!: string;
  @Input() title!: string;

}
