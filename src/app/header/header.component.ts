import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor ( private dataStorageService: DataStorageService,
                private authService: AuthService) {}


  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
        (respones: Response) => {console.log(respones); }
    );
  }

  onLogOut() {
    console.log('in logout');
    this.authService.logOut();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}
