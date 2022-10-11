import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Andrés';
  age: number = 21;
  waifu = 'https://i.ibb.co/vvrkgDr/lucy.jpg';
}
