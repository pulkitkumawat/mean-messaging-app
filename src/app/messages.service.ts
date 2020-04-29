import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return [
      {
        text: "Small!",
        date: new Date(),
        reply: false,
        user: {
          name: "Bot",
          avatar: "https://i.gifer.com/no.gif",
        },
      },
      {
        text: "Message 2",
        date: new Date(),
        reply: false,
        user: {
          name: "Bot",
          avatar: "https://i.gifer.com/no.gif",
        },
      },
    ];
  }

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
}
