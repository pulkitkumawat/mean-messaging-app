import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  messages = [
    {
      text: "Small!",
      date: new Date(),
      reply: true,
      user: {
        name: "Bot",
        avatar: "https://i.gifer.com/no.gif",
      },
    },
  ];
  items = ["Pulkit", "Gulshan", "Bot"];
  sendMessage(e) {
    console.log(e);
    this.messages.push({
      text: e.message,
      date: new Date(),
      reply: false,
      user: {
        name: "Jonh Doe",
        avatar: "https://i.gifer.com/no.gif",
      },
    });
  }
}
