import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const { error } = await supabase.from('waiting-list').insert([{ name, email }]);

  if (error) {
    console.error('Supabase insert failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'You’re on the A-list 🥂' });
}
