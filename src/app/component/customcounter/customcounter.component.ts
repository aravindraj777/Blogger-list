import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getChannelName } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit {
  
  counterSubscribe!:Subscription;

  constructor(private store:Store<{counter:CounterModel}>){

  }
  ngOnInit(): void {
    this.counterSubscribe =  this.store.select(getChannelName).subscribe((data)=>{
    
      this.channelName = data;
    })
  }
  counterinput!:number;
  actionType=''
  channelName=''

  onIncrement(){
    this.store.dispatch(customIncrement({value:+this.counterinput,action:this.actionType}))
  }
}
