import { Component, OnInit } from '@angular/core';
import { TinymceEditorComponent } from '../../../shared/components/tinymce-editor/tinymce-editor.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-blog-editor',
    templateUrl: './blog-editor.component.html',
    styleUrls: ['./blog-editor.component.scss'],
    standalone: true,
    imports: [MatCardModule, TinymceEditorComponent]
})
export class BlogEditorComponent implements OnInit {
  
  ngOnInit(): void {
   
  }
}
