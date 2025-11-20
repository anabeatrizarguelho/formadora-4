import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonBackButton, IonButtons, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-golpes',
  templateUrl: './golpes.page.html',
  styleUrls: ['./golpes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonBackButton, IonButtons, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton]
})
export class GolpesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
