import { Component } from "@angular/core";
import { MessagesService } from "./messages.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(messageService: MessagesService) {
    this.messages = messageService.getPosts();
  }
  messages = [];
  items = ["Pulkit", "Gulshan", "Bot"];
  sendMessage(e) {
    console.log(e);
    this.messages.push({
      text: e.message,
      date: new Date(),
      reply: true,
      user: {
        name: "Jonh Doe",
        avatar: "https://i.gifer.com/no.gif",
      },
    });
  }
}
