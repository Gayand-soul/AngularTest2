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
   //metod
  getName(){
    return this.name();
  }
  
  //nya ändringar-för lekuppgift9
  userInput: string = '';
  savedInput: string = '';
  submitInput() {
    this.savedInput = this.userInput;
    // Simulerad logg för SIEM
    console.log('⚠️ Security Alert: User input submitted ->', this.userInput);
  }

}
