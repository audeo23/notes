import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  ngOnInit() { }

  format(formatting: string) {
    switch (formatting) {
      case 'title': {document.execCommand('fontSize', false, '5')} ; {document.execCommand('bold')}; break; 
      case 'heading': {document.execCommand('fontSize', false, '4')} ; {document.execCommand('bold')}; break; 
      case 'body': {document.execCommand('fontSize', false, '3')}; break; 
      case 'bold': { document.execCommand('bold') }; break; 
      case 'italic': { document.execCommand('italic') }; break; 
      case 'underline': { document.execCommand('underline') }; break; 
      case 'ordered': { document.execCommand('insertOrderedList') }; break; 
      case 'unordered': { document.execCommand('insertUnorderedList') }; break; 
      default: {} ; break ;
    }
  }
}