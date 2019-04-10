import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
//import {HttpClient} from '@angular/http';
import {FileUploadModule} from  'ng2-file-upload/ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import {DataService} from './services/data.service';
import { KeysPipe } from './keys.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    KeysPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule ,
    HttpModule,
    FileUploadModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
