import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  flatArray: number[]
  fee: number
  amount: number
  building: number | string
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.flatArray = Array(22).fill(1).map((x: number, i) => x += i);
    this.fee = 20
    this.amount = 32
    this.building = 72
  }
  
}
