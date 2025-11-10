import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../../../lib/supabaseAdmin";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Parser } from 'json2csv';

export async function GET(request: Request, { params }: { params: { collection: string } }) {
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

    const { collection } = params;
    const { data, error } = await supabaseAdmin.from(collection).select('*');
    if (error) throw error;

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
