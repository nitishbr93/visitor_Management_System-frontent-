import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVisitorsComponent } from './components/add-visitors/add-visitors.component';
import { EditComponent } from './components/edit/edit.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistorComponent } from './components/registor/registor.component';
import { TableComponent } from './components/table/table.component';
import { ViewVisitorsComponent } from './components/view-visitors/view-visitors.component';
import { VisitorsComponent } from './components/visitors/visitors.component';


const newLocal = 'viewData';
const routes: Routes = [
{
path:"",
component:HomepageComponent
// pathMatch:'full'

},
{
  path:'registor',
  component:RegistorComponent,
},
{
  path:'visitors',
  component:VisitorsComponent,
  pathMatch:'full'
},
{
  path:'edit/:id',
  component:EditComponent,
  pathMatch:'full'
},
{
  path:'addvisitors',
  component:AddVisitorsComponent,
  pathMatch:'full'
},
{
  path:'table',
  component:TableComponent,
  pathMatch:'full'
},
{
  path:'view/:id',
  component:ViewVisitorsComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
