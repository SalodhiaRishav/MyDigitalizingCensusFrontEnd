import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HouseMember} from '../models/HouseMember.model';


@Injectable()
  export class HouseMemberService {

    constructor( private http: HttpClient) {}

    addHouseMember(houseMember:HouseMember)
    {
        let url:string='http://localhost:1305/api/housemember';
      
        return this.http.post(url,houseMember);
    }

  }