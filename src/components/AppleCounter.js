import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { AiFillApple } from "react-icons/ai";

const AppleCounter = () => {
	const [counter, setCounter] = useState(0);
	const [isExactlyTens, setIsExactlyTens] = useState(false);

	const handleCountChange = (operation) => {
		if (operation === "INC") {
			const count = counter + Math.ceil(Math.random() * 5);
			setCounter(count);
		} else if (operation === "DEC") {
			const count = counter - Math.ceil(Math.random() * 5);
			count < 0 ? setCounter(0) : setCounter(count);
		}
	};

	useEffect(() => {
		counter !== 0 && counter % 10 === 0
			? setIsExactlyTens(true)
			: setIsExactlyTens(false);
	}, [counter]);

	return (
		<div>
			<h3>
				Total Apples <AiFillApple />
			</h3>{" "}
			<h2 css={styles.counter}> {counter} </h2>{" "}
			<p>
				Exactly in Tens:{" "}
				{isExactlyTens ? (
					<span style={{ color: "green" }}> YES </span>
				) : (
					<span style={{ color: "red" }}> NO </span>
				)}{" "}
			</p>{" "}
			<button css={styles.btn} onClick={() => handleCountChange("INC")}>
				Add More Apples{" "}
			</button>{" "}
			<button css={styles.btn} onClick={() => handleCountChange("DEC")}>
				Eat Some Apples{" "}
			</button>{" "}
		</div>
	);
};

export default AppleCounter;
const styles = {
	counter: css`
		background-color: rgb(231, 29, 133);
		color: white;
		border: 1px solid rgb(141, 37, 37);
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 4px;
		cursor: pointer;
	`,
	btn: css`
		background-color: rgb(218, 213, 161);
		color: black;
		border: 1px solid rgba(0, 0, 0, 0);
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 50px 6px;
		cursor: pointer;
	`,
};
