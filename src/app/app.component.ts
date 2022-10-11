import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Andrés';
  age: number = 21;
  waifu: string = 'https://i.ibb.co/vvrkgDr/lucy.jpg';
  btnDisabled: boolean = true;

  // Métodos
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.age += 1;
  }

  decrementAge() {
    this.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  chageName(event: Event) {
    const element = event.target as HTMLInputElement;

    this.name = element.value;
  }
}
