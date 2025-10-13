import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FooterContactComponent } from './footer-contact/footer-contact.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Header, RouterModule, IonicModule, FooterContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LandingAngular20');
}
