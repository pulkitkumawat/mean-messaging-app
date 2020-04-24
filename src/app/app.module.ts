import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatListModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
