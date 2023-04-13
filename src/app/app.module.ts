import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { RegistorComponent } from './components/registor/registor.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule}  from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {MatInputModule}  from '@angular/material/input';
// import {MatRadioModule}  from '@angular/material/radio';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './components/edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddVisitorsComponent } from './components/add-visitors/add-visitors.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { ViewVisitorsComponent } from './components/view-visitors/view-visitors.component';
// import { ViewVisitorsComponent } from './view-visitors/view-visitors.component';
// import { ViewVisitorsComponent } from './view-visitors/view-visitors.component';
import {QRCodeModule} from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    VisitorsComponent,
    RegistorComponent,
    EditComponent,
    AddVisitorsComponent,
    TableComponent,
    ViewVisitorsComponent,
    // ViewVisitorsComponent,
    // ViewVisitorsComponent,
    // ViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatTableModule,
    QRCodeModule
    // debounceTime
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
