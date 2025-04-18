import './App.css'
import {Header} from "./Header.tsx";
import {BestSellers} from "./BestSellers.tsx";

function App() {
    return (
        <div className={'appContainer'}>
            <Header/>
            <BestSellers/>
        </div>
    )
}

export default App