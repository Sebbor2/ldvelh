import { Component, OnInit } from '@angular/core';
import {StorageService} from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Foret de la Malediction';
  background = '../../assets/index.jpg';

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.initialize();
  }
}
