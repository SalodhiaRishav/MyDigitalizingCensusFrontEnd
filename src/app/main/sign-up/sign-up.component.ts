import { Component, OnInit ,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/User.model'
import {ResponseModel} from '../../models/Response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

@ViewChild('signUpForm') SignUpForm:NgForm;
 imageUrl = '/assets/image/defaultimage.png'; 
 public UserList : User[];
 public fileToUpload:File=null;
 public binaryString:string;
 public base64textString  ;
 display:boolean=false;
  pwdPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  firstnamelastnamepattern="^[a-zA-Z ]*$";
  aadharPattern="^[0-9].{11,11}$"
  constructor(private userService : UserService,
    private router:Router) { }

  ngOnInit() {
    this.userService.UserListFetchedEvent.subscribe((isFetched)=>{
      if(isFetched)
      {
        this.UserList=this.userService.UserData.data;
      }
    })
    
  }


  onImageUpload(evt: any) {
  this.display = true;
  this.fileToUpload = evt.target.files[0];
  const reader = new FileReader();
  reader.onload = (event: any) => {
  this.binaryString = btoa(event.target.result);
  this.base64textString = 'data:image/jpeg;base64,' + btoa(event.target.result); 
  };
  reader.readAsBinaryString(this.fileToUpload);
  } 
   
  
  onSubmit(){
    let user : User=new User()
    user.firstName=this.SignUpForm.value.firstname;
    user.lastName=this.SignUpForm.value.lastname;
    user.email=this.SignUpForm.value.email;
    user.aadharNumber=this.SignUpForm.value.aadharnumber;
    user.password=this.SignUpForm.value.password;
    if(this.fileToUpload===null)
    {
      alert('Please select a profile pic');
    }
    else
    {
      if(this.fileToUpload.type==='image/jpeg'||this.fileToUpload.type==='image/png')
      {
        this.userService.PostUser(user,this.binaryString, this.fileToUpload.name).subscribe((response : ResponseModel)=>{
          if(response.success)
          {
            alert(response.message);
          this.router.navigate(['/login']);
      
          }else
          {
            alert(response.message);
          }
          
        })
      }
      else
      {
        alert('please select a png or jpg type image...');
      }
      
    }

  
  }

  

}
