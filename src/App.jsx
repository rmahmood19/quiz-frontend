import {useState} from 'react'
import './App.css'
import {Quiz} from "./components/Quiz.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1 className='text-6xl text-bold'>Quiz Master</h1>
                <Quiz />
            </div>
        </>
    )
}

export default App
