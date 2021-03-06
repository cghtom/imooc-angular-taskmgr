import { Directive,HostListener,ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appDrag][draggedClass]'
})
export class DragDirective {

   private _isDraggble = false;
   
   @Input('appDrag')
   set isDraggable(val){
     this._isDraggble = val;
     this.rd.setAttribute(this.el.nativeElement,'draggable',`${val}`);
   }

   get isDraggable(){
    return this._isDraggble;
  }

  @Input() draggedClass: string;
  constructor(private el:ElementRef, private rd: Renderer2) { }

  @HostListener('dragstart',['$event'])
  ondragstart(ev:Event){
    if(this.el.nativeElement === ev.target){
      this.rd.addClass(this.el.nativeElement,this.draggedClass)
    }
  }
  @HostListener('dragend',['$event'])
  ondragend(ev:Event){
    if(this.el.nativeElement === ev.target){
      this.rd.removeClass(this.el.nativeElement,this.draggedClass)
    }
  }

}
