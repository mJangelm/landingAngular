import { Component } from '@angular/core';
import { SouthLogo } from '../../south-logo/south-logo';
import { IonicModule } from '@ionic/angular';
import { logoGithub, logoLinkedin, mailUnreadOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';

addIcons({
  'logo-github': logoGithub,
  'logo-linkedin': logoLinkedin,
  'mail-unread-outline': mailUnreadOutline
});

@Component({
  selector: 'app-inicio',
  standalone:true,
  imports: [SouthLogo, IonicModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
