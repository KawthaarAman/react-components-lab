import './WeatherForecast'

function WeatherForecast({ day, imgAlt, conditions, time }) {
    return (
        <>
            <div className="weather">
                <h2> {day}</h2>
                <img src = "" alt={imgAlt} />
                <p><span>conditions: {conditions} </span></p>
                <p><span>time: {time} </span></p>
            </div>
        </>
    )
}
export default WeatherForecast