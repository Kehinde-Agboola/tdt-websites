import { NextResponse } from "next/server";
import { admin, firestore } from "../../../../lib/firebaseAdmin";
import { headers } from 'next/headers'
import { Parser } from 'json2csv';

export async function GET(request: Request, { params }: { params: { collection: string } }) {
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

    const { collection } = params;
    const snapshot = await firestore.collection(collection).get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const parser = new Parser();
    const csv = parser.parse(data);

    return new NextResponse(csv, {
        headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename=${collection}.csv`,
        },
    });

  } catch (error) {
    console.error("Error exporting to CSV: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
