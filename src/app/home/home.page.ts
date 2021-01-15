import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService, Message } from '../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  newMsg= '';

  constructor(private autservice:AuthService,private router:Router) {}
  
  ngOnInit(){
    this.messages = this.autservice.getChatMessages();
  }

  sendMessage(){
    this.autservice.addChatMessage(this.newMsg).then(()=>{
      this.newMsg = '';
      this.content.scrollToBottom();
    })
  }

  logout(){
    this.autservice.logout().then(()=>{
      this.router.navigateByUrl('/',{replaceUrl:true});
    })
  }
}
