import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [ SigninComponent,
                  SignupComponent],
  imports: [ CommonModule,
            AuthRoutingModule,
            SharedModule
          ]
  })

export class AuthModule {}
