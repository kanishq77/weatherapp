import React, { useState } from "react";
import searchImage from "./search.png";

export default function Search() {
	const [inputValue, setInputValue] = useState("");

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
		console.log(e.target.value);
	};
	const handleCity = async () => {
		console.log(inputValue);
		return inputValue;
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Search City"
				value={inputValue}
				onChange={handleInputValue}
				className="w-full h-10 placeholder-opacity-50 rounded-2xl opacity-70 p-4"
			></input>
			{/* <label className="before:' ' after:' ' pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11p] font-normal leading-tight text-grey-500 transition-all before:pointer-events-"></label> */}
			<button className="absolute inset-y-0 right-0 px-3 py-1 m-3 h-8 rounded-full bg-blue-500   hover:bg-blue-800 ">
				<img
					src={searchImage}
					alt="search"
					className="size-6"
					onClick={handleCity}
				/>
			</button>
			<img
				src={"🔆"}
				alt="temp"
				className=" flex justify-center items-center px-24 py-1.5 pt-10"
			/>
		</div>
	);
}
