import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormoneComponent } from "src/app/formone/formone.component";
import { FormtwoComponent } from "src/app/formtwo/formtwo.component";
import { FormthreeComponent } from "src/app/formthree/formthree.component";

const routes: Routes = [ { path: '',component: FormoneComponent },
{ path: 'part2',component: FormtwoComponent },
{ path: 'feedback',component: FormthreeComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }