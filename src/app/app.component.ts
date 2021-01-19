import { Component } from '@angular/core';
import * as AOS from 'aos';
import { faCoffee,faCamera } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'myweb';
  faCoffee = faCoffee;
  faCamera= faCamera;

  ngOnInit() {
    AOS.init();
  }
}
