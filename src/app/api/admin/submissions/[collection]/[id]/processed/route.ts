import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../../lib/supabaseAdmin";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(request: Request, { params }: { params: { collection: string, id: string } }) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session }} = await supabase.auth.getSession()

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { data: isAdmin, error: rpcError } = await supabase.rpc('is_admin');
    if (rpcError || !isAdmin) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const { collection, id } = params;
    const { error } = await supabaseAdmin.from(collection).update({ processed: true }).match({ id });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error marking as processed: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
