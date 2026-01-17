create table if not exists analyses (
  id uuid primary key default gen_random_uuid(),
  make text not null,
  model text not null,
  year int not null,
  engine text not null,
  fuel_type text not null,
  mileage int not null,
  price int not null,
  country text not null,
  city text,
  created_at timestamp with time zone default now()
);

alter table analyses enable row level security;

create policy "Allow public insert"
on analyses
for insert
to public
with check (true);


create policy "Allow public select"
on analyses
for select
to public
using (true);

