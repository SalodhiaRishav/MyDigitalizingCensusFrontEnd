import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {House} from '../models/House.model';
import { LoginUser } from '../models/LoginUser.model';

@Injectable()
  export class HouseService {

    constructor( private http: HttpClient) {
    }

    addHouse(house:House)
    {
        let url:string='http://localhost:1305/api/house';
        return this.http.post(url,house);
    }


    getHouseById(houseNumber:number)
    {
      let url:string='http://localhost:1305/api/house/'+houseNumber.toString();
      return this.http.get(url);
    }
   

  }