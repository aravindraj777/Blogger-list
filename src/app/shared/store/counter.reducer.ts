import { createReducer, on } from "@ngrx/store"
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.actions"
import { initialState } from "./counter.state"


const _countReducer = createReducer(initialState, on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
}),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }
    ),
    on(customIncrement,(state,action)=>{
        return {
            ...state,
            counter:action.action=='add'? state.counter +action.value:state.counter - action.value
        }
    }),
    on(changeChannelName,(state,action)=>{
        return{
            ...state,
            channelName:action.channel
        }
    })
)

export function counterReducer(state: any, action: any) {
    return _countReducer(state, action)
}