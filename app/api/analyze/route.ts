import { NextRequest, NextResponse } from 'next/server';
import { VehicleDetails } from '@/types/analysis';
import { supabase } from '@/lib/supabaseClient';
import { generateAnalysis } from './service';

export async function POST(req: NextRequest) {
  try {
    const vehicle = (await req.json()) as VehicleDetails;

    // Basic validation
    if (
      !vehicle.make ||
      !vehicle.model ||
      !vehicle.year ||
      !vehicle.price ||
      !vehicle.country
    ) {
      return NextResponse.json(
        { error: 'Missing required vehicle details' },
        { status: 400 },
      );
    }

    // 1️⃣ Generate analysis
    const analysis = generateAnalysis(vehicle);

    // 2️⃣ Insert into DB
    const { data, error } = await supabase
      .from('analyses')
      .insert({
        ...vehicle,
        year: Number(vehicle.year),
        mileage: Number(vehicle.mileage),
        price: Number(vehicle.price),
        analysis_status: 'completed',
        result: analysis,
      })
      .select('id')
      .single();

    if (error) {
      console.error('[SUPABASE_INSERT_ERROR]', error);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    // 3️⃣ Return ID to frontend
    return NextResponse.json({ id: data.id }, { status: 201 });
  } catch (error) {
    console.error('[ANALYZE_API_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to analyze vehicle' },
      { status: 500 },
    );
  }
}
