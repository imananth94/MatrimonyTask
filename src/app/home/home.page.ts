import { Component } from '@angular/core';
import { HelperServiceService } from '../helper-service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    spaceBetween: 1,

  };

  profiles = [];

  ngOnInit() {

  }

  constructor(public helperService: HelperServiceService, private router: Router, private nav: NavController) {
    this.profiles = JSON.parse(this.helperService.get_profile_data());
  }

  view_profile(profile: any) {
    profile.view_profile = true;
    this.helperService.set_profile_data(this.profiles);
    this.nav.navigateForward('/view-profile', { state: profile });
  }

  clear_profile(profile: any) {
    profile.view_profile = false;

  }


  screen2() {
    this.nav.navigateForward('/card-slide');
  }
}
