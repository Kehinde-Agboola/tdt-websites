import { NextResponse } from "next/server";
import { admin, firestore } from "../../../../lib/firebaseAdmin";
import { headers } from 'next/headers'

export async function GET() {
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

    const researchSubmissions = await firestore.collection("research-submissions").orderBy("submittedAt", "desc").get();
    const sponsorshipSubmissions = await firestore.collection("sponsorship-submissions").orderBy("submittedAt", "desc").get();
    const projectAdoptionSubmissions = await firestore.collection("project-adoption-submissions").orderBy("submittedAt", "desc").get();
    const newsletterSubscriptions = await firestore.collection("newsletter-subscriptions").orderBy("submittedAt", "desc").get();

    const research = researchSubmissions.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const sponsorships = sponsorshipSubmissions.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const adoptions = projectAdoptionSubmissions.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const newsletters = newsletterSubscriptions.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({
      research,
      sponsorships,
      adoptions,
      newsletters,
    });
  } catch (error) {
    console.error("Error fetching submissions: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
