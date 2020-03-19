import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toggle = false
  constructor() { }

  showSet(){
    this.toggle = true
  }
  hideSet(){
    this.toggle = false
  }
}
