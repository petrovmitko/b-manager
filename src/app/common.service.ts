import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toggle = false
  value: string | number
  constructor() { }

  showSet(x){
    this.toggle = true
    this.value = x
  }
  hideSet(){
    this.toggle = false
  }
}
