import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonIcon, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink, IonCard, IonCardHeader, IonCardContent, IonIcon, IonCardHeader, IonCardTitle],
})
export class HomePage {
  constructor() {}
}
