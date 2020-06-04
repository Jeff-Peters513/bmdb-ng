import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserLoginComponent } from './feature/user-login/user-login.component';
import { SortPipe } from './pipe/sort.pipe';
import { BaseComponent } from './feature/base/base.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    CreditListComponent,
    ActorListComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    MovieEditComponent,
    ActorDetailComponent,
    ActorCreateComponent,
    ActorEditComponent,
    CreditCreateComponent,
    CreditDetailComponent,
    CreditEditComponent,
    MenuComponent,
    UserLoginComponent,
    SortPipe,
    BaseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
