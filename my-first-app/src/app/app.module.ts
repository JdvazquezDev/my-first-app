import { RouterModule, Route } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { HolaMundoComponent } from "./hola-mundo/hola-mundo.component";
import { UserComponent } from "./user/user.component";

import { DataService } from "./data.service";
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  { path: '', component: HolaMundoComponent }, 
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [AppComponent, HolaMundoComponent, UserComponent, AboutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
