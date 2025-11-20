import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonAccordionGroup, IonAccordion, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.page.html',
  styleUrls: ['./privacidade.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton,  IonAccordionGroup, IonAccordion, IonLabel, IonItem]
})
export class PrivacidadePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
