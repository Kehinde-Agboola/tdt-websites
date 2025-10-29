import { NextResponse } from "next/server";
import { admin, firestore } from "../../../../../lib/firebaseAdmin";
import { headers } from 'next/headers'

export async function POST(request: Request, { params }: { params: { collection: string, id: string } }) {
  try {
    const authorization = headers().get('authorization')
    if (!authorization) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const token = authorization.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken.admin) {
        return new NextResponse("Forbidden", { status: 403 });
    }

    const { collection, id } = params;
    await firestore.collection(collection).doc(id).update({ processed: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error marking as processed: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
