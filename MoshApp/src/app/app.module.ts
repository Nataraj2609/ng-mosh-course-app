import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NotesComponent } from './notes/notes.component';
import { PostsService } from './service/posts.service';
import { GlobalErrorHandler } from './exception-handling/GlobalErrorHandler';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodsComponent } from './components/foods/foods.component';
import { OrderComponent } from './components/order/order.component';
import { AsyncPromisePipeComponent } from './components/async-promise-pipe/async-promise-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PostsComponent,
    NotesComponent,
    NavbarComponent,
    FoodsComponent,
    OrderComponent,
    AsyncPromisePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostsService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
