import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader, IonImg, IonInput, IonInputPasswordToggle, IonItem, IonLabel, IonRow, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCol, IonFooter, IonGrid, IonImg, IonInput, IonItem, IonLabel, IonRow, IonText, RouterLink, IonInputPasswordToggle]
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
