
import { CounterModel } from "./counter.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getCounterState = createFeatureSelector<CounterModel>('counter')


export const getCounter = createSelector(getCounterState,(state)=>{
    return state.counter;
})

export const getChannelName = createSelector(getCounterState,(state)=>{
    return state.channelName;
})