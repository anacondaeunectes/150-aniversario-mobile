import { Component, Input, OnInit } from '@angular/core';
import { Acto } from "../../../../modelos/acto";
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor() { }

  @Input ()actos:Acto;
  ngOnInit() {
  }

}
