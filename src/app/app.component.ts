import { Component, OnInit } from "@angular/core";
import { MessagesService } from "./messages.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loggedInUser = "Gulshan";
  messages = [];
  currentConversation;
  currentRecipient;
  temp = [];
  conversationList = [];
  conversationSelected = false;
  constructor(private messageService: MessagesService) {
  }

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
    this.conversationSelected = true;
    console.log(conversation);
    this.messageService
      .getMessagesByConv(conversation.convId)
      .subscribe((output) => {
        this.messages = output.messages;
        this.currentRecipient=conversation.user;
        this.currentConversation=conversation.convId;
      });
    console.log(this.messages);
  }

  sendMessage(e) {
    let today:Date=new Date() ;
  this.messageService.postMessageByConv(this.loggedInUser,this.currentRecipient,e.message,this.currentConversation,today.toLocaleString())
    .subscribe(res=>{
      console.log(res);
      this.messages.push({
        text: e.message,
        date:today,
        sender: this.loggedInUser
      });
    });

  }

  deleteConversation(item){
    let curr_id=item.convId;
    this.messageService.deleteConversation(curr_id)
                  .subscribe((res)=>{
                    console.log(res);
                  });
    
  }
}
