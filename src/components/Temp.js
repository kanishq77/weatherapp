import React, { useState, useEffect } from "react";
import humidityImage from "./humidity.png";
import windImage from "./wind.png";
import searchImage from "./search.png";

export default function Temp() {
	const [data, setData] = useState(null);
	const API_KEY = "abeed709880f4312ba274704241302";
	// const [loading, setLoading] = useState(true);
	// const [debouncedInputValue, setDebouncedInputValue] = useState("London");
	const [inputValue, setInputValue] = useState("London");
	const [valu, setInputValu] = useState("");
	// const [loc, setLocation] = useState("London");
	// useEffect(() => {
	// 	const timerId = setTimeout(() => {
	// 		setDebouncedInputValue(inputValue);
	// 	}, 1000); // Adjust the debounce delay as needed (e.g., 500 milliseconds)

	// 	if (inputValue) {
	// 		return () => {
	// 			clearTimeout(timerId);
	// 		};
	// 	}
	// }, [inputValue]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = await fetch(
					`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputValue}&aqi=no`
				);
				if (!url.ok) {
					throw new Error("Network response was not ok");
				}
				const jsonData = await url.json();
				setData(jsonData);
				// setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setData(null);
			}
		};
		// if (inputValue) {
		// if (inputValue.trim() !== "") {
		fetchData();
		// } else {
		// setData(null); // Clear data if input value is empty
		// }
		// }
	}, [inputValue]);

	// console.log(data);
	const handleInputValue = (e) => {
		// setInputValue(e.target.value);
		// console.log(e.target.value);
		setInputValu(e.target.value);
	};
	const handleCity = () => {
		// console.log(valu);
		setInputValue(valu);
		// setLocation(inputValue);
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleCity();
		}
	};
	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Search City"
					value={valu}
					onChange={handleInputValue}
					onKeyUp={handleKeyPress}
					className="w-full h-10 placeholder-opacity-50 rounded-2xl opacity-70 p-4"
				></input>
				{/* <label className="before:' ' after:' ' pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11p] font-normal leading-tight text-grey-500 transition-all before:pointer-events-"></label> */}
				<button className="absolute inset-y-0 right-0 px-3 py-1 m-3 h-8 rounded-full">
					<img
						src={searchImage}
						alt="search"
						className="size-6"
						onClick={handleCity}
					/>
				</button>
				{data && (
					<div className="flex justify-center items-center text-3xl text-white font-semibold	">
						<img
							src={data.current.condition.icon}
							alt={data.current.condition.text}
						/>
						<p> &nbsp;&nbsp;{data.current.temp_c}&deg;C</p>
					</div>
				)}
			</div>
			{data && (
				<h1 className="text-white font-semibold text-xl">
					{data.location.name}
				</h1>
			)}

			<div className="flex flex-row  justify-between p-2 pb-6">
				<div className="flex flex-col">
					<img
						src={humidityImage}
						alt="Humidity"
						className="flex1 size-6 ml-8"
					/>
					{data && (
						<p className="flex1">
							Humidity:{data.current.humidity}
						</p>
					)}
				</div>
				<div className="flex flex-col ">
					<img
						src={windImage}
						alt="wind"
						className="flex1 size-6 ml-10"
					/>
					{data && (
						<p className="flex1 ">
							Windspeed: {data.current.wind_kph}
						</p>
					)}
					<p>(Km/h)</p>
				</div>
			</div>
			<a
				href={`https://www.weatherapi.com/weather/q/${inputValue}`}
				rel="noreferrer"
				target="_blank"
				className=" bg-blue-500/60  border border-black rounded-md hover:bg-blue-700 active:bg-blue-950 mt-2"
			>
				Readmore
			</a>
		</div>
	);
}
