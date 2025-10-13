import { Component, Input, OnInit } from '@angular/core';
import { Iproyecto } from '../../interfaces/iproyecto';

@Component({
  selector: 'app-proyecto-card',
  standalone:true,
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss'],
})
export class ProyectoCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

@Input() elemento!: Iproyecto;

}
