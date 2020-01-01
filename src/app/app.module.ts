import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes=[
  {path:'',component: FirstPageComponent},
  {path:'Home',component: HomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'Profile', component: ProfileComponent}
  // {path:'/Login',component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    NavigationBarComponent,
    ChatComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
