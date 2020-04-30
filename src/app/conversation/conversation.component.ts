import { Component, TemplateRef, OnInit } from "@angular/core";
import { MessagesService } from "../messages.service";
import { NbDialogService } from "@nebular/theme";

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.css"],
})
export class ConversationComponent implements OnInit {
  loggedInUser = "Pulkit";
  messages = [];
  currentConversationId;
  currentRecipient;
  conversationList = [];
  isConversationSelected = false;
  constructor(
    private messageService: MessagesService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    let temp;
    this.messageService
      .getConversationsForUser(this.loggedInUser)
      .subscribe((output) => {
        temp = output.conversations;
        temp.map((op) => {
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
    console.log("clicked");
    this.isConversationSelected = true;
    console.log(conversation);
    this.messageService
      .getMessagesByConv(conversation.convId)
      .subscribe((output) => {
        console.log(output);
        this.messages = output.messages;
        this.currentRecipient = conversation.user;
        this.currentConversationId = conversation.convId;
      });
  }

  sendMessage(e) {
    let today: Date = new Date();
    this.messageService
      .postMessageByConv(
        this.loggedInUser,
        this.currentRecipient,
        e.message,
        this.currentConversationId,
        today.toLocaleString()
      )
      .subscribe((res) => {
        console.log(res);
        this.messages.push({
          text: e.message,
          date: today,
          sender: this.loggedInUser,
        });
      });
  }

  deleteConversation(item) {
    let curr_id = item.convId;
    this.messageService.deleteConversation(curr_id).subscribe((res) => {
      console.log(res);
      if (item.convId == this.currentConversationId) {
        this.currentConversationId = null;
        this.messages = [];
        this.isConversationSelected = false;
        const index = this.conversationList.indexOf(item, 0);
        if (index > -1) {
          this.conversationList.splice(index, 1);
        }
      } else {
        const index = this.conversationList.indexOf(item, 0);
        if (index > -1) {
          this.conversationList.splice(index, 1);
        }
      }
    });
  }

  open(dialog: TemplateRef<any>, item) {
    console.log(item);
    this.dialogService.open(dialog, { context: item, autoFocus: false });
  }
}
