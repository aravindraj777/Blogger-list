import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {

  constructor(private store:Store<{counter:CounterModel}>){

  }
  counterinput!:number;
  actionType=''

  onIncrement(){
    this.store.dispatch(customIncrement({value:+this.counterinput,action:this.actionType}))
  }
}
