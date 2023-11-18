import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit{

  constructor(private store:Store<{counter:{counter:number}}>){}

  counterDisplay!:number;

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      this.counterDisplay =  data.counter;
    })
  }
}
