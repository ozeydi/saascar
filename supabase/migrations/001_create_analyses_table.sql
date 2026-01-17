-- 001_create_analyses_table.sql
create table if not exists analyses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),

  listing_url text,

  make text not null,
  model text not null,
  year int not null,
  engine text,
  fuel_type text,
  mileage int,
  price int,

  country text not null,
  city text,

  analysis_status text default 'pending',
  risk_score int,
  verdict text,

  result jsonb
);
