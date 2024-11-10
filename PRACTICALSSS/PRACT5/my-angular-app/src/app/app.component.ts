import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Registeration Use';
  displayname='';
  displayemail='';
  displaypassword='';

  getValue(name:string,email:string,password:string){
    this.displayname=name;
    this.displayemail=email;
    this.displaypassword=password;
  }
}
