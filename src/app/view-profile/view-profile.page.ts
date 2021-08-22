import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    autoplay: true,
    speed: 300,
  };

  profileData: any;

  constructor(private route: ActivatedRoute, private router: Router, private nav: NavController) {
    if (router.getCurrentNavigation().extras.state) {
      const profileInfo = this.router.getCurrentNavigation().extras.state;
      this.profileData = profileInfo;
    }
  }

  ngOnInit() {
  }

  homepage() {
    this.nav.navigateBack('/home');
  }

}
