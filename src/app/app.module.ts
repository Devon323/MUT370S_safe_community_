import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserpostComponent } from './components/userpost/userpost.component';
import { UsernewsformComponent } from './components/usernewsform/usernewsform.component';

import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

import { DataService } from './services/data.service';
import { DatasportService } from './services/datasport.service';


// Navigation Links
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'news', component: NewsComponent},
  {path: 'userpost', component: UserpostComponent, canActivate: [AuthguardGuard]}, // a
  //{path: 'usernewsform', component: UsernewsformComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LoginComponent,
    HomeComponent,
    UserpostComponent,
    UsernewsformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [UserService, AuthguardGuard, DataService, DatasportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
