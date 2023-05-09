import { useState, useEffect, useReducer, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTestStoreCounter, decrementTestStoreCounter, selectTestCounter } from './testCounterSlice';
import { created, updated, deleted, rtkCountSelector, rtkPostsSelector } from './rtk/rtkPostSlice'

export default function Test(props: any) {
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
    const reducerCounter = (state, action) => {
        setCounterUseReducerLastRendered(new Date().toLocaleTimeString());
        if (action.type === 'inc') { return { cnt: state.cnt + 1} } 
        else if (action.type === 'dec') { return { cnt: state.cnt - 1} } 
        else  { return { cnt: state.cnt} }
    }
    const [counterUseReducer, dispatchReducerCounter] = useReducer(reducerCounter, { cnt: 0 });
    const incrementUseReducerCounter = () => dispatchReducerCounter({ type: 'inc'})
    const decrementUseReducerCounter = () => dispatchReducerCounter({ type: 'dec'})
    //useCallback (cache a function definition between re-renders)
    //....later.....
    //useMemo (cache the result of a calculation between re-renders)
    //....later.....
    //useRef (access DOM nodes directly. reference a value that is not nedded for rendering)
    const inputRef = useRef(null);
    const handleUseRefSubmit = (e) => {
        e.preventDefault();
        inputRef.current.value = '';
        inputRef.current.focus();
    }
    const title = props.title;
    /*
        Redux (store, action, reducer)
    */ 
    const dispatch = useDispatch();
    const decrementReduxCounter = () => { dispatch(decrementTestStoreCounter()); }
    const incrementReduxCounter = () => { dispatch(incrementTestStoreCounter()); }
    /*
        Redux Hooks
    */
    //useSelector
    const testCounterValue = useSelector(selectTestCounter);
    //useDispatch
    /*
        Redux Toolkit
    */
    const postTitleInputRef = useRef(null);
    const postAuthorInputRef = useRef(null);
    //Read data from the store with useSelector
    const rtkCount = useSelector(rtkCountSelector);
    const rtkPosts = useSelector(rtkPostsSelector);
    //Dispatch actions with useDispatch
    const handleNewPost = (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        const title = postTitleInputRef.current.value;
        const author = postAuthorInputRef.current.value;
        const pst = { id: id,  title: title, author: author };
        dispatch(created(pst));  
        postTitleInputRef.current.value = '';
        postAuthorInputRef.current.value = '';
        postTitleInputRef.current.focus();
    }
    return (
        <>
            <section className="bg-secondary text-light p-5">
                <div className="container" id={title}>
                    <div>
                        <h3>Posts</h3>
                        <p>{rtkCount}</p>
                        <table className='table table-primary table-bordered border-light table-sm'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody className='table-striped table-hover table-group-divider'>
                                {rtkPosts.map((post) => (
                                <tr key={post.id} className='table-success'>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <strong>New Post</strong>
                        <form onSubmit={handleNewPost}>
                                    <p>Title: <input type='text' ref={postTitleInputRef} /></p>
                                    <p>Author: <input type='text' ref={postAuthorInputRef} /></p>
                                    <p><button type='submit'>Add</button></p>
                        </form>
                        <hr/>
                    </div>
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