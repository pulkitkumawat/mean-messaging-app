import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  constructor(private http: HttpClient) {}

 
  getConversationsForUser(username: string) {
    return this.http.get<{ message: string; conversations: any }>(
      "http://localhost:3000/api/conversations/" + username
    );
  }

  getMessagesByConv(convId: string) {
    return this.http.get<{ messages: []; outputMessage: string }>(
      "http://localhost:3000/api/messages/" + convId
    );
  }

  postMessageByConv(sender:string,recipient:string,text:string,conversationId:string,date:string){
     return this.http.post("http://localhost:3000/api/messages/"+conversationId,{sender:sender,recipient:recipient,text:text,date:date});
  }

  deleteConversation(conversationId:string){
    return this.http.delete("http://localhost:3000/api/messages/"+conversationId);
  }
}
