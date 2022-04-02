import { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

export interface IWeatherInfoData {
	description: string;
	icon: string;
	id: number;
	main: "Clouds";
}

export interface IWeatherData {
	name: string;
	main: {
		feels_like: number;
		humidity: number;
		temp: number;
		temp_max: number;
		temp_min: number;
	};
	weather: IWeatherInfoData[];
}

const API_KEY: string = "50b9f93e5b10e5c73a79eb3ae4434d23";
function App() {
	const [search, setSearch] = useState<string>("");
	const [data, setData] = useState<IWeatherData>();

	const onSearchValue = (value: string): void => {
		setSearch(value);
	};

	const getWeather = async (value: string): Promise<IWeatherData> => {
		const { data } = await axios.get<IWeatherData>(
			`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`
		);

		setData(data);

		return data;
	};

	useEffect(() => {
		if (!!search.length) {
			getWeather(search);
		}
	}, [search]);

	return (
		<div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center w-full h-screen">
			<div className="w-full md:w-3/4  lg:w-1/3 p-20">
				<h1 className="text-center text-5xl font-bold text-gray-500 ">
					Weather In
				</h1>

				<div className="py-8">
					<Search onSearchValue={onSearchValue} />
					{!!data?.main ? <WeatherCard data={data} /> : null}
				</div>
			</div>
		</div>
	);
}

export default App;
