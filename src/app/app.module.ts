import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { RecordsService} from './records.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmpInfoComponent],
  bootstrap:    [ AppComponent ],
  providers: [RecordsService]

})
export class AppModule { }
