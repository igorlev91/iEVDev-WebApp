"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TokenParams } from "@/types/Interfaces";

const Page = ({ token }: TokenParams) => {
	const [confirmationResult, setConfirmationResult] = useState("Waiting for response...");
	const [buttonText, setButtonText] = useState("");
	const [buttonHref, setButtonHref] = useState(``);
	const [redirectClassName, setRedirectClassName] = useState("fs-200 text-lightgrey offscreen");
	const navigate = useRouter();
	const sendRequest = async ({ token }: TokenParams) => {
		const response = await fetch(`/api/confirmation/${token}`, {
			method: "GET",
		});
		const data = await response.json();
		if (!response.ok) {
			if (data.message === "jwt expired") {
				setConfirmationResult("Your confirmation link has expired.");
			}
			setButtonText("Resend Confirmation Email");
			setButtonHref(`/recover`);
		} else {
			setConfirmationResult("Confirmation success.");
			setRedirectClassName("fs-100 text-lightgrey visible");
			setButtonText("Click here if your browser did not redirect you");
			setButtonHref(`/login`);
			setTimeout(() => {
				navigate.push("/login");
			}, 2000);
		}
	};
	useEffect(() => {
		sendRequest({ token });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	return (
		<>
			<div className="flex-container-column padding-1rem">
				<div className="confirmation-container">
					<p className="fs-200  text-lightgrey">{confirmationResult}</p>
					<p className={redirectClassName}>You will automatically be redirected to the login page.</p>
					<Link href={buttonHref}>
						<button type="button" className={buttonText === "" ? "offscreen" : "visible"}>
							{buttonText}
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Page;
