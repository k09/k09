import TestProps from "./TestProps";
import { useState, useEffect, useReducer, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTestStoreCounter, decrementTestStoreCounter, selectTestCounter } from './testCounterSlice';

export default function Test(props: TestProps) {
    /*
        Hooks
    */
    //useState (add React state to a functional component)
    const [counterUseState, setCounterUseState] = useState(0);
    const [counterUseStateLastRendered, setCounterUseStateLastRendered] = useState(new Date().toLocaleTimeString());
    const incrementUseStateCounter = () => {
        setCounterUseState(counterUseState+1);
        setCounterUseStateLastRendered(new Date().toLocaleTimeString());
    };
    const decrementUseStateCounter = () => {
        setCounterUseState(counterUseState-1);
        setCounterUseStateLastRendered(new Date().toLocaleTimeString());
    };
    //useEffect (synchronixze a functional component with an external system)
    useEffect(() => { document.title = `Counter (useState) is now (useEffect): ${counterUseState}`}, [counterUseState]);
    //useContext (provides a way to pass data through the component tree => use Redux instead)
    //....later.....
    //useReducer (state management, alternative to useState.)
    const [counterUseReducerLastRendered, setCounterUseReducerLastRendered] = useState(new Date().toLocaleTimeString());
    const reducerCounter = (state: any, action: any) => {
        setCounterUseReducerLastRendered(new Date().toLocaleTimeString());
        if (action.type === 'inc') {
            return { cnt: state.cnt + 1}
        } else if (action.type === 'dec') {
            return { cnt: state.cnt - 1}
        } else  {
            return { cnt: state.cnt}
        }
    }
    const [counterUseReducer, dispatchReducerCounter] = useReducer(reducerCounter, { cnt: 0 });
    const incrementUseReducerCounter = () => dispatchReducerCounter({ type: 'inc'})
    const decrementUseReducerCounter = () => dispatchReducerCounter({ type: 'dec'})
    //useCallback (cache a function definition between re-renders)
    //useMemo (cache the result of a calculation between re-renders)
    //useRef (access DOM nodes directly. reference a value that is not nedded for rendering)
    const inputRef = useRef(null);
    const handleUseRefSubmit = (e: any) => {
        e.preventDefault();
        if (inputRef && inputRef.current) {
            if (inputRef.hasOwnProperty('current') && (inputRef.current as any).hasOwnProperty('value')) {
                console.log((inputRef.current as any).value);
                (inputRef.current as any).value = '';
                (inputRef.current as any).focus();
            }
        }
    }
    const title = props.title;
    
    /*
        Redux (store, action, reducer)
    */ 
    const testCounterValue = useSelector(selectTestCounter);
    const dispatch = useDispatch();
    const decrementReduxCounter = () => {
        console.log('dec disp 1 ' + testCounterValue);
        dispatch(decrementTestStoreCounter());
        console.log('dec disp 2 ' + testCounterValue);
    }
    const incrementReduxCounter = () => {
        console.log('inc disp 1 ' + testCounterValue);
        dispatch(incrementTestStoreCounter());
        console.log('inc disp 2 ' + testCounterValue);
    }

    return (
        <>
            <section className="bg-secondary text-light p-5">
                <div className="container" id={title}>
                    <div>
                        <span>Counter (useState):</span>&nbsp;
                        <button onClick={decrementUseStateCounter}>-</button>&nbsp;
                        <span>{counterUseState} (last render: {counterUseStateLastRendered})</span>&nbsp;
                        <button onClick={incrementUseStateCounter}>+</button>
                    </div>
                    <div>
                        <span>Counter (useReducer):</span>&nbsp;
                        <button onClick={decrementUseReducerCounter}>-</button>&nbsp;
                        <span>{counterUseReducer.cnt} (last render: {counterUseReducerLastRendered})</span>&nbsp;
                        <button onClick={incrementUseReducerCounter}>+</button>
                    </div>
                    <div>
                        <span>Counter (Redux):</span>&nbsp;
                        <button onClick={decrementReduxCounter}>-</button>&nbsp;
                        <span>{testCounterValue}</span>&nbsp;
                        <button onClick={incrementReduxCounter}>+</button>
                    </div>
                    <div>
                        <form>
                            <input type='text' ref={inputRef} />
                            <button type='submit' onClick={handleUseRefSubmit}>Do it!</button>
                        </form>
                    </div>
                </div>
            </section>       
      </>
    );
}