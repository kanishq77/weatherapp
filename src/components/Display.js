import React from "react";
import Temp from "./Temp";
const imgUrl = require("./sunrise.jpg");
export default function Display() {
	return (
		<>
			<div className=" grid justify-center items-center h-screen w-screen min-w-363px">
				{/* <input
					type="text"
					className=" border border-sky-200	 fill-sky-300 px-4 py-2"
					placeholder="Enter something..."
				/> */}
				<div
					className=" bg-origin-border   box-content size-72  p-3  rounded-md  backdrop-blur-sm bg-white/30"
					// bg-gradient-to-b from-sky-700  to-sky-300 #for bg color gradient
					//h-96 w-96   md:h-64 md:w-64 #for responsive size of the box
					style={{
						backgroundImage: `URL(${imgUrl})`,
						backgroundSize: "cover",
					}}
				>
					<div className=" backdrop-opacity-10 backdrop-invert   bg-white/30 h-full w-full rounded-2xl  p-2 ">
						<Temp></Temp>
					</div>
				</div>
			</div>
		</>
	);
}
