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
import {
  NbThemeModule,
  NbLayoutModule,
  NbSearchModule,
  NbCardModule,
  NbSidebarModule,
  NbChatModule,
  NbListModule,
  NbIconModule,
  NbButtonModule,
  NbDialogModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { ConversationComponent } from "./conversation/conversation.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ConversationComponent,
  ],
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
    NbThemeModule.forRoot({ name: "dark" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbChatModule,
    NbIconModule,
    NbListModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
