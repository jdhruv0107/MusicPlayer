import React from "react"
import { createRoot } from 'react-dom/client'
import Joke from './Jokes'
import Login from './login'
import App from "./App"

const app = createRoot(document.getElementById('root'))
// App.render(
// <div>
// <Joke Setup="I got my daughter a fridge for her birthday ?"
// Punchline="I can't wait for her face to light up when she opens it"/>
// <Joke Setup="How did the hacker escape from the police ?"
// Punchline="He just ransomware"/>
// <Joke Setup="How does a pirate travel on mountain roads ?"
// Punchline="Scurvy"/>
// <Joke Setup="How do bees stay in the hive in the winter ?"
// Punchline="Swarm"/>
// </div>
// )

// // const root = ReactDOM.createRoot(<h1>hiyyy</h1>,document.getElementById("root"))
// // root.render()

// // Props practice
app.render(
    <div>
        <App/>
    </div>
)