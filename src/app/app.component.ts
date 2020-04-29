import { Component, OnInit } from "@angular/core";
import { MessagesService } from "./messages.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loggedInUser = "Pulkit";
  messages = [];
  temp = [];
  conversationList = [];
  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.messageService
      .getConversationsForUser(this.loggedInUser)
      .subscribe((output) => {
        this.temp = output.conversations;
        console.log(this.temp);
        this.temp.map((op) => {
          let a = op.participants.find((a) => a != this.loggedInUser);
          this.conversationList.push({
            user: a,
            convId: op._id,
          });
        });
        console.log(this.conversationList);
      });
  }

  getMessages(conversation: { user: string; convId: string }) {
    console.log(conversation);
    this.messageService
      .getMessagesByConv(conversation.convId)
      .subscribe((output) => {
        this.messages = output.messages;
      });
    console.log(this.messages);
  }

  sendMessage(e) {
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
