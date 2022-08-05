import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  constructor(public  httpClient: HttpClient) { 
    
  }
  getAllPets() {
    const headers = { 'content-type': 'application/json'};
    const baseURL = `${environment.petApiURL}` + "api/PetParentContactInfo";
    console.log(JSON.stringify( this.httpClient.get(baseURL)));
    return this.httpClient.get(baseURL);
  }
}
