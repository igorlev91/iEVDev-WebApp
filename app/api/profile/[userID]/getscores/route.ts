import { NextResponse, NextRequest } from "next/server";
import { UserIDParams } from "@/app/api/interfaces";
import { findUser, getScores } from "@/app/api/databasefunctions";

// secured by access token middleware
export async function GET(req: NextRequest, { params }: UserIDParams) {
	const userID = params.userID;

	if (!userID) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}

	try {
		const [errMsg, foundUser] = await findUser(userID);

		if (!foundUser) {
			return NextResponse.json({ message: "User Not Found" }, { status: 401 });
		} else if (errMsg.length !== 0) {
			return NextResponse.json({ message: errMsg }, { status: 400 });
		}

		const [_, foundScores] = await getScores(String(foundUser.userID));
		return NextResponse.json(foundScores);
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}
}
