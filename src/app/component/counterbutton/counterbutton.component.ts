import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  constructor(private store : Store<{counter:{counter:number}}>){}

  onIncrement(){
    this.store.dispatch(increment())
  }

  onDecrement(){
    this.store.dispatch(decrement())
  }


  onReset(){
    this.store.dispatch(reset())
  }
}
