import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ICard } from '../../interfaces/ICard';


@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent implements OnInit {
  @Input() Card: ICard;
  constructor() {}

  ngOnInit(): void {
   
  }
}
