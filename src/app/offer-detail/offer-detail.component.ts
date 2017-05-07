import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {BigchainService} from "../bigchain.service";

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {

  constructor(private router: Router, private bigchainService: BigchainService) {
      this.router = router;
  }

  ngOnInit() {
  }

  enroll() {
    this.bigchainService.startGenerator();
    
    this.router.navigate(['/dashboard']);
    sessionStorage.setItem('allianz', '1');
  }
}
