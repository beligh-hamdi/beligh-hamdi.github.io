import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'img[appDefaultMissingImage]',
    standalone: true
})
export class DefaultMissingImageDirective {
  imgExtension = 'data:image/svg+xml;base64,' 
  defaultImg: string = `${this.imgExtension}PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiBpZD0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm5vLWltYWdlPC90aXRsZT48cGF0aCBkPSJNMzAsMy40MTQxLDI4LjU4NTksMiwyLDI4LjU4NTksMy40MTQxLDMwbDItMkgyNmEyLjAwMjcsMi4wMDI3LDAsMCwwLDItMlY1LjQxNDFaTTI2LDI2SDcuNDE0MWw3Ljc5MjktNy43OTMsMi4zNzg4LDIuMzc4N2EyLDIsMCwwLDAsMi44Mjg0LDBMMjIsMTlsNCwzLjk5NzNabTAtNS44MzE4LTIuNTg1OC0yLjU4NTlhMiwyLDAsMCwwLTIuODI4NCwwTDE5LDE5LjE2ODJsLTIuMzc3LTIuMzc3MUwyNiw3LjQxNDFaIi8+PHBhdGggZD0iTTYsMjJWMTlsNS00Ljk5NjYsMS4zNzMzLDEuMzczMywxLjQxNTktMS40MTYtMS4zNzUtMS4zNzVhMiwyLDAsMCwwLTIuODI4NCwwTDYsMTYuMTcxNlY2SDIyVjRINkEyLjAwMiwyLjAwMiwwLDAsMCw0LDZWMjJaIi8+PHJlY3QgaWQ9Il9UcmFuc3BhcmVudF9SZWN0YW5nbGVfIiBkYXRhLW5hbWU9IiZsdDtUcmFuc3BhcmVudCBSZWN0YW5nbGUmZ3Q7IiBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPjwvc3ZnPg==`;


  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
   // this.el.nativeElement.style.display = "none";
    this.el.nativeElement.src =  this.defaultImg;
  }

}
