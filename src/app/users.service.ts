import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData()
  {
    return{
      name:'Saiful',
      age:23,
      id:234
    }
  }
}
