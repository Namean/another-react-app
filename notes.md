Lets try and unpack what is going on here with the react component.





first we are importing useState from react

I've commented out the createInitialTodos() function to make this example simpler to explain.



then we have a functional component called TodoList

which has two constants, [todos, setTodos], and [text, setText]


```jsx

const TodoList = () => {
    // [[], <createInitialTodos>]
    const [todos, setTodos] = useState([]); 
    const [text, setText] = useState('');


```

What is useState() in React ?

The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.


Syntax: The first element is the initial state and the second one is a function that is used for updating the state.


```jsx

const [state, setState] = useState(initialstate)

```