import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one';
  items: any = [
    {
      itemid : 1,
      data : 'one'
    },
    {
      itemid : 2,
      data : 'two'
    }
  ];
}
