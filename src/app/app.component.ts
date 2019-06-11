import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'manchine à laver',
      status: 'éteint'
    },
    {
      name: 'ordinateur',
      status: 'allumé'
    },
    {
      name: 'télévision',
      status: 'éteint'
    }
  ]
  constructor() {
    setTimeout(() => { this.isAuth = true; }, 4000);
  }
  onAllumer() {
    console.log('On allume tout');
  }
}


