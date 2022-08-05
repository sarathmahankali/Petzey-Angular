import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetServiceService } from '../pet-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 //pets$!:Observable<any>;

  constructor(private petServiceService:PetServiceService ) { }
  
  ngOnInit(): void {
    // if (pets) {
    //   this.restaurantDetails = res;
    //   this.title = this.restaurantDetails.name;
    // }
    // this.pets = this.petServiceService.getAllPets();
    // console.log(this.pets[0]);

  };
}


