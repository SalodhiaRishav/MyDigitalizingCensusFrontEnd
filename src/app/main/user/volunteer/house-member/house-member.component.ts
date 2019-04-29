import { Component, OnInit ,ViewChild} from '@angular/core';
import{MaritalStatusType} from '../../../../models/enums/MaritalStatusType';
import{HouseMember} from '../../../../models/HouseMember.model';

import{OccupationNatureType} from '../../../../models/enums/OccupationNatureType';
import{OccupationStatusType} from '../../../../models/enums/OccupationStatusType';
import{RelationToHeadType} from '../../../../models/enums/RelationToHeadType';
import{GenderType} from '../../../../models/enums/GenderType';
import{NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HouseMemberService } from 'src/app/services/housemember.service';

import { HouseService } from 'src/app/services/house.service';
import {House} from '../../../../models/House.model';

@Component({
  selector: 'app-house-member',
  templateUrl: './house-member.component.html',
  styleUrls: ['./house-member.component.css']
})
export class HouseMemberComponent implements OnInit {

  @ViewChild('houseMemberRegisterForm') HouseMemberRegisterForm:NgForm;
  @ViewChild('MaritalStatus') MaritalStatusDropDown:any;
  @ViewChild('OccupationStatus') OccupationStatusDropDown:any;


  public MaritalStatusKeys;
  public OccupationNatureKeys;
  public OccupationStatusKeys;
  public RelationToHeadKeys;
  public GenderKeys;
  public IsUnmarriedSelected:boolean=true;
  public IsUnEmployedSelected:boolean=true;

  



  constructor(private houseMemberService:HouseMemberService) {
   
    this.MaritalStatusKeys = Object.keys(MaritalStatusType).filter(k => isNaN(Number(k)));
    this.OccupationNatureKeys = Object.keys(OccupationNatureType).filter(k => isNaN(Number(k)));
    this.OccupationStatusKeys = Object.keys(OccupationStatusType).filter(k => isNaN(Number(k)));
    this.RelationToHeadKeys = Object.keys(RelationToHeadType).filter(k => isNaN(Number(k)));
    this.GenderKeys = Object.keys(GenderType).filter(k => isNaN(Number(k)));
   }

  public DefaultValues={
    RelationToHead:'Self',
    Gender:'Male',
    OccupationStatus:'Student',
    MaritalStatus:'Unmarried',
    OccupationNature:'Government',
  }

  ngOnInit() {
  }

  onMaritalStatusChange(){
    if(this.MaritalStatusDropDown.value=='Unmarried')
    {
      this.IsUnmarriedSelected=true;
    }
    else
    {
      this.IsUnmarriedSelected=false;
    }
    
  }

  onOccupationStatusChange(){
    if(this.OccupationStatusDropDown.value==='Unemployed' || this.OccupationStatusDropDown.value==='Student')
    {
      this.IsUnEmployedSelected=true;
    }
    else
    {
      this.IsUnEmployedSelected=false;
    }
    
  }
  onSubmit()
  {
  let houseMember : HouseMember=new HouseMember();
  houseMember=this.HouseMemberRegisterForm.value;
  if(!houseMember.AgeAtMarriage)
  {
    houseMember.AgeAtMarriage=null;
  }
  if(!houseMember.OccupationNature)
  {
    houseMember.OccupationNature=null;
  }
  
  houseMember.VolunteerId=sessionStorage['VolunteerId'];
  this.houseMemberService.addHouseMember(houseMember).subscribe((data)=>{
    console.log(data);
  })
  }

}
