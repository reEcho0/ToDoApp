import { /*useEffect,*/ useState } from 'react';
import './App.css';

function App() {
    //const [forecasts, setForecasts] = useState();

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="textInput" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Note</label>
            <input
                id="textInput"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Edit text"
            />
        </div>
    );
}

export default App;