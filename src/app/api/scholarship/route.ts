import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const body = await request.json()

    const { data, error } = await supabase
      .from('scholarship_submissions')
      .insert([
        {
          full_name: body.fullName,
          email: body.email,
          phone: body.phone,
          school: body.school,
          grade_level: body.gradeLevel,
          gpa: body.gpa,
          essay: body.essay,
        }
      ])
      .select()

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error submitting scholarship form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}