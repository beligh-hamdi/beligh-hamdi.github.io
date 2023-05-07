import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';

import { Editor } from 'tinymce';
import { MatButtonModule } from '@angular/material/button';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgIf, AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-tinymce-editor',
    templateUrl: './tinymce-editor.component.html',
    styleUrls: ['./tinymce-editor.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        NgIf,
        EditorComponent,
        MatButtonModule,
        AsyncPipe,
    ],
    providers: [
      { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class TinymceEditorComponent implements OnInit {
  options!: any;
  editor!: Editor;
  editorSubject: Subject<any> = new AsyncSubject();

  ngOnInit(): void {
    this.setupEditor();
  }

  setupEditor() {
    this.options = {
      base_url: '/tinymce',
      suffix: '.min',
      height: 600,
      min_height: 600,
      resize: 'both',
      menubar:  true,
      mobile: {
        menubar: true,
        plugins: 'autosave lists autolink code',
        toolbar: 'undo bold italic styles code'
      },
      toolbar_mode: 'floating',
      toolbar: [
        { name: 'history', items: [ 'undo', 'redo' ] },
        { name: 'styles', items: [ 'styles', 'formatselect' ] },
        { name: 'formatting', items: [ 'bold', 'italic', 'backcolor', 'removeformat' ] },
        { name: 'alignment', items: [ 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ] },
        { name: 'indentation', items: [ 'outdent', 'indent' ] },
        { name: 'quicktable', items: [ 'quicktable',  'fullscreen' ] },
        { name: 'code', items: [ 'code' ] },
      ]
     ,
      plugins: [
        'advlist', 
        'anchor',
        'autolink', 
        'autoresize',
        'autosave',
        'charmap',
        'code', 
        'codesample', 
        'directionality',
        'emoticons',
        'fullscreen',
        'help',
        'image',
        'importcss',
        'insertdatetime',
        'link',
        'lists',
        'media',
        'nonbreaking',
        'pagebreak',
        'preview',
        'quickbars',
        'save',
        'searchreplace',
        'table',
        'visualblocks', 
        'visualchars',
        'wordcount'
      ],
      external_plugins: {},
      setup: (editor: Editor) => {
        this.editor = editor;
      }
    };
  }

  onEditorInit(event: any) {
    this.editorSubject.next(event.editor);
    this.editorSubject.complete();
  }

  getText() {
    const text = this.editor.getContent({ format: 'text' });
    console.log(text);
  }
}
