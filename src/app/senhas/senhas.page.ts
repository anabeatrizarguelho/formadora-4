import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-senhas',
  templateUrl: './senhas.page.html',
  styleUrls: ['./senhas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList, IonButton, IonFab, IonFabButton, IonIcon, IonBackButton, IonButtons]
})
export class SenhasPage implements OnInit {

  constructor() { 
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {
  }

  senhaGerada: string | null = null;

   gerarSenha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  let senha = "";
  for (let i = 0; i < 12; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  this.senhaGerada = senha;
}


}
