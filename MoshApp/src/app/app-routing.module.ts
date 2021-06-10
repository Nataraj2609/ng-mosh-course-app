import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
import { OrderComponent } from './components/order/order.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', component: NotesComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'books', component: PostsComponent},
  {path: 'contacts', component: ContactFormComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: '**', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
