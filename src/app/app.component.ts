import { Component, signal } from "@angular/core";



@Component({
  selector: 'app-root',
  //template: `<p> Hello Gaya, How are you!</p>`,
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles:[' ']
})



export class AppComponent {
  name = signal('My Signal!');
  imageURL = signal('assets/Sakura.JPG');

  getName(){
    return this.name();
  }
}