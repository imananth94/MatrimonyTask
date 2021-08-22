import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  profiles = [];
  constructor(public toastController: ToastController) {
    
   }

   loadprofiledata() {

    this.profiles = [
      {
        name: "Priyanka",
        id:"M9837832",
        age: "27 yrs",
        height: "5ft 2in",
        language: "Tamil",
        caste: "Nair",
        education: "MBBS",
        occupation: "Doctor",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        img: "assets/img/kajal.jpg",
        pictures:[
          {
            pic:"assets/img/kajal1.jpg",
          },
          {
            pic:"assets/img/kajal2.jpg",
          },
          {
            pic:"assets/img/kajal3.jpg",
          },
          {
            pic:"assets/img/kajal4.jpg",
          },
          {
            pic:"assets/img/kajal5.jpg",
          }
        ]
      },
      {
        name: "Swetha",
        id:"M9837839",
        age: "24 yrs",
        height: "5ft 5in",
        language: "Tamil",
        caste: "Nair",
        education: "B-Tech",
        occupation: "Engineer",
        city: "Trichy",
        state: "Tamil Nadu",
        country: "India",
        img: "assets/img/naz.jpg",
        pictures:[
          {
            pic:"assets/img/naz1.jpg",
          },
          {
            pic:"assets/img/naz2.jpg",
          },
          {
            pic:"assets/img/naz3.jpg",
          },
          {
            pic:"assets/img/naz4.jpg",
          },
          {
            pic:"assets/img/naz5.jpg",
          }
        ]
      },
      {
        name: "Harshini",
        id:"M12537832",
        age: "23 yrs",
        height: "5ft 1in",
        language: "Tamil",
        caste: "Nair",
        education: "Bsc",
        occupation: "Accountant",
        city: "Theni",
        state: "Tamil Nadu",
        country: "India",
        img: "assets/img/sri.jpg",
        pictures:[
          {
            pic:"assets/img/sri1.jpg",
          },
          {
            pic:"assets/img/sri2.jpg",
          },
          {
            pic:"assets/img/sri4.jpg",
          },
          {
            pic:"assets/img/sri.jpg",
          },
          
        ]
      },

      {
        name: "Dhivya",
        id:"M12592732",
        age: "23 yrs",
        height: "5ft 1in",
        language: "Tamil",
        caste: "Nair",
        education: "Bsc",
        occupation: "Accountant",
        city: "Theni",
        state: "Tamil Nadu",
        country: "India",
        img: "assets/img/anu2.jpg",
        pictures:[
          {
            pic:"assets/img/anu3.jpg",
          },
          {
            pic:"assets/img/anu2.jpg",
          },
          {
            pic:"assets/img/anu1.jpg",
          }
          
        ]
      },
    ]
    
    this.set_profile_data( this.profiles );
  }

  set_profile_data( profile){
    window.localStorage.setItem('profiles',JSON.stringify(profile))
  }

  get_profile_data(){
   return  window.localStorage.getItem('profiles');
 
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      cssClass:'customToast'
    });
    toast.present();
  }
}
