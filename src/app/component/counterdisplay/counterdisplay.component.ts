import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getCounter } from 'src/app/shared/store/counter.selector';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit,OnDestroy{

  constructor(private store:Store<{counter:CounterModel}>){}

 

  counterDisplay!:number;
 
  counterSubscribe!:Subscription;
  counter$ !:Observable<CounterModel>



  ngOnInit(): void {
   this.counterSubscribe =  this.store.select(getCounter).subscribe((data)=>{
      this.counterDisplay =  data;
     
    })

    // this.counter$ = this.store.select('counter')
  }

  ngOnDestroy(): void {
     if(this.counterSubscribe){
      this.counterSubscribe.unsubscribe
     }
    }
}
