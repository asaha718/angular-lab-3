import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExtendedAthletes';
  name: string = ""; 
  sport: string = ""; 
  active: boolean | string = true; 

  athletes = [
    { 
      name: " Lebron James",
      sport: "Basketball", 
      active: true
    }, 
    { 
      name: "Roger Federer", 
      sport: "Tennis", 
      active: false
    }, 
    { 
      name: "Tiger Woods", 
      sport: "Golf", 
      active: true
    }
  ]

  onSend(){ 
    let newAthlete = { 
      name: this.name, 
      sport: this.sport, 
      active: this.active === "true" ? true : false 
    }

    this.athletes.push(newAthlete); 
  }

}
