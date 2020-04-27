import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  constructor() {}

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
}
