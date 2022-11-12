import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Store} from "./TestTodo ReduxToolkit-TypeScript/store/store";
import {useState} from "react";
import {
    ToDoState,
    ADD_TODO,
    DELETE_CHECKED,
    DELETE_DONE,
    CHECK_ALL,
} from "./TestTodo ReduxToolkit-TypeScript/featers/silces/slice";
import EachTodo from "./TestTodo ReduxToolkit-TypeScript/EACH_TODO/eachTodo";

function App() {
    const dispatch = useDispatch()
    const data = useSelector<Store, ToDoState[]>(state => state.todos)
    const [inputValue, setInputValue] = useState('')


    // // useEffect(() => {
    // //   console.log(inputValue)
    // // },[inputValue])
    //
    //
    // const inputRef = useRef<string>()
    //
    //
    // // const foo = useCallback( () : string => {
    // //   console.log(inputValue)
    // //   return 'ewe'
    // // }, [])
    // // foo()
    //
    // // const boo = (foo: () => string) : Function => {
    // //   return foo
    // // }
    // //
    // //
    // // let a = boo(foo)
    // // console.log(a())
    const handleInputChange = (e: { target: HTMLInputElement }): void => {
        setInputValue(e.target.value)
    }

    const handleDeleteChecked = (): void => {
        dispatch(DELETE_CHECKED())
    }

    const handleDeleteDone = (): void => {
        dispatch(DELETE_DONE())
    }

    const handleAddButton = (): void => {
        dispatch(ADD_TODO({title: inputValue}))
        setInputValue('')
    }

    const handleSelectAll = (): void => {
        dispatch(CHECK_ALL())
    }


    return (
        <div>
            <input value={inputValue} onChange={handleInputChange} type="text"/>
            <button disabled={!inputValue.trim()} onClick={handleAddButton}> Add Todo</button>
            <button onClick={handleDeleteChecked}>Delete Checked</button>
            <button onClick={handleDeleteDone}>Delete Done</button>
            <button onClick={handleSelectAll}>Check All</button>
            {data.map(t => <EachTodo key={t.id} {...t}/>)}
        </div>
    );
}

export default App;