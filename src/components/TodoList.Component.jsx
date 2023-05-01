import { useState } from 'react';

// function createInitialTodos() {
//     const initialTodos = [];
//     for (let i = 0; i < 50; i++) {
//         initialTodos.push({id: i, text: 'Item ' + (i + 1)});
//     }
//     return initialTodos;
// }

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];


const TodoList = () => {


    const [todos, setTodos] = useState([]); // <createInitialTodos>
    const [inputComponentText, setInputComponentText] = useState('');


    return (
        <>
            <input placeholder='Enter some text' value={inputComponentText} 
            onChange={e => setInputComponentText(e.target.value)} />

            <button onClick={() => {
                setInputComponentText('');
                setTodos([{
                    id: todos.length,
                    text: inputComponentText,
                    last: products[0].title
                    
                }, ...todos]);
            }}>Add</button>

            <ul>
                {todos.map(x => (
                    <li key={x.id}>{x.text}</li>
                ))}
            </ul>
        </>
    );
}


export default TodoList;