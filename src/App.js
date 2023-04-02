import React,{useState} from 'react'
import axios from 'axios'


function App() {
  const [data, setData] = useState(null)
  const [cityName, setCityNmae] = useState([])
  const [loading, setloading] = useState(false)

  const getWeather=async()=>{
    setloading(true)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f7ed317d114da31bc0225ec0ff3fab4b`)
    .then(res=>{
      setData(res.data.main)
      setloading(false)
    })
  }
  return (
    <div className="App">
        <div className='container'>
          <h1>Weather APP</h1>
          <input
          type='text'
          placeholder='enter city name'
          onChange={(e)=>{setCityNmae(e.target.value)}}
          />
           
            <button onClick={()=>{
            getWeather()
          }}>
            Get Weather</button>
         
          
            {loading && <h1>loading..</h1>}
            {data ? (
              <div className='weather'>
                <h2>Data</h2>
                <h3>Temperature:<span>{data.temp}</span> c </h3>
                <h3>min-Temperature:<span>{data.temp_min}</span>  c </h3>
                <h3>max-Temperature:<span>{data.temp_max}</span>  c </h3>
                <h3>humidity:<span>{data.humidity}</span> km/hc </h3>
                <h3>pressure:<span>{data.pressure}</span></h3>
                
                <h3>feels_like:<span>{data.feels_like}</span></h3>
              </div>
            ):(<h2>Enter a City</h2>)}
        </div>
    </div>
  );
}

export default App;
