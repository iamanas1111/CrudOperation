import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule,MatCheckboxChange} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule
   
    
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
