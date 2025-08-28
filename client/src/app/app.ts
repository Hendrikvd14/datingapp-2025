import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  //protected readonly title = signal('client');
  private http = inject(HttpClient);
  protected title = 'Dating app';
  protected members = signal<any>([]);

  constructor(){

  }
  async ngOnInit() {
    this.members.set(await this.getMembers());
  }

  async getMembers(){

    try{
      return await lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch(error){
      console.log(error);
      throw error;
    }


    
  }

}

