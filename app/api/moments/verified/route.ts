
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    { id: '1', title: 'Verified Moment One', verification_score: 10 },
    { id: '2', title: 'Verified Moment Two', verification_score: 8 }
  ])
}
