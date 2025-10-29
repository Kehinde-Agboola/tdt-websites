import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";
import { headers } from 'next/headers'

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session }} = await supabase.auth.getSession()

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { data: isAdmin, error } = await supabase.rpc('is_admin');
    if (error || !isAdmin) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const { data: research, error: researchError } = await supabaseAdmin.from('research_submissions').select('*').order('created_at', { ascending: false });
    if (researchError) throw researchError;

    const { data: sponsorships, error: sponsorshipsError } = await supabaseAdmin.from('sponsorship_submissions').select('*').order('created_at', { ascending: false });
    if (sponsorshipsError) throw sponsorshipsError;

    const { data: adoptions, error: adoptionsError } = await supabaseAdmin.from('project_adoption_submissions').select('*').order('created_at', { ascending: false });
    if (adoptionsError) throw adoptionsError;

    const { data: newsletters, error: newslettersError } = await supabaseAdmin.from('newsletter_subscriptions').select('*').order('created_at', { ascending: false });
    if (newslettersError) throw newslettersError;

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
