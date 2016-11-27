import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from './bugs/bug.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
      BrowserModule,
      BugModule,
      SharedModule
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

