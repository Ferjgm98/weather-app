import { IWeatherData } from "../App";

export interface WeatherCardProps {
	data: IWeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps): JSX.Element => {
	const getCelsFromKelvin = (temp: number): number => {
		return Math.round(temp - 273.15);
	};

	return (
		<div className="bg-white rounded-3xl p-10 shadow-md my-4">
			<h3 className="text-2xl text-gray-500 leading-none text-center">
				{data.name}
			</h3>
			<p className="text-5xl leading-3 font-bold text-gray-500 text-center">
				...
			</p>
			<div className="pt-8 flex justify-between">
				<div className="w-1/2">
					<p className="text-7xl font-thin text-gray-500">
						{getCelsFromKelvin(data.main.temp)}&deg; C
					</p>
				</div>
				<div className="w-1/2">
					<p className="text-xl font-semibold text-right text-gray-500">
						{data.weather[0].description}
					</p>
					<p className="text-lg text-right pt-2 text-gray-500">
						Max: {getCelsFromKelvin(data.main.temp_max)}&deg; C
					</p>
					<p className="text-lg text-right pt-2 text-gray-500">
						Min: {getCelsFromKelvin(data.main.temp_min)}&deg; C
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center mt-10">
				<div className="bg-gray-700 shadow-xl rounded-full w-24 h-24">
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt="icon"
					/>
				</div>
			</div>
			<div className="flex justify-center items-center mt-10">
				<div className="w-1/2 text-center text-gray-500">
					<p className="text-3xl font-semibold">
						{getCelsFromKelvin(data.main.feels_like)}&deg; C
					</p>
					<p>Feels Like</p>
				</div>
				<div className="w-1/2 text-center text-gray-500">
					<p className="text-3xl font-semibold">{data.main.humidity}%</p>
					<p>Humidity</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
