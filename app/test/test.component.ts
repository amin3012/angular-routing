import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Welcome {{name}}</h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name}}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}</h2>
      <h2>{{url}}</h2>

      <input [id]="myId" disabled="isDisabled"  type="text" value="Jay Amin HTML disabled prop">
      <input [id]="myId" disabled={isDisabled}  type="text" value="Jay Amin Angular interpolation">
      <input [id]="myId" bind-disabled="isDisabled"  type="text" value="Jay Amin Angular bind attribute">
      <input id="{{myId}}" [disabled]="isDisabled"  type="text" value="Jay Amin bind attribute">
      

      <h2 class="text-success">Jay Amin Simple Class</h2>
      <h2 [class]="successClass">Jay Amin bind value</h2>
      <h2  [class]="successClass" class="text-special">Jay Amin</h2>
      <h2 [class.text-danger]="hasError">Jay Amin</h2>
      <h2 [ngClass]="messageClasses">Message messageClasses</h2>
      
      <h2 [style.color]="'orange'">Style Binding</h2> 
      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>            
      <h2 [style.color]="highlightColor">Style Binding 3</h2>
      <h2 [ngStyle]="titleStyles">Style Binding 4</h2>


      <button (click)="onClick($event)">Greet</button>
      <button (click)="greeting = 'Welcome Jay Amin'">Greet Jay Amin</button> 
      <h2>{{greeting}}</h2>


      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)">Log</button>


      <input type="text" [(ngModel)]="name">
      {{name}}
    </div>



  <h1>Pipes START</h1>
    <h2>
      {{"Hello " + name}}
    </h2>
    <h2>{{"Codevolution" | lowercase}}</h2>
    <h2>{{"Codevolution" | uppercase}}</h2>
    <h2>{{"Welcome to codevolution" | titlecase}}</h2>
    <h2>{{"Codevolution" | slice:3:6}}</h2>
    <h2>{{person | json}}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    
    
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'GBP'}}</h2>
    <h2>{{0.25 | currency:'GBP':'code'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Jay Amin";
  public url = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event)
    this.greeting = event.type;
  }
  
  logMessage(value){
    console.log(value)
  }

}
