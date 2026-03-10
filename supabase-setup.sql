-- =============================================
-- Supabase SQL: Run this in your Supabase SQL Editor
-- =============================================
-- 1. Create the properties table
create table if not exists properties (
    id uuid default gen_random_uuid() primary key,
    title text not null default '',
    price text not null,
    type text not null,
    location text not null,
    image_url text not null,
    description text,
    bedrooms integer,
    bathrooms integer,
    area_sqft integer,
    featured boolean default true,
    created_at timestamp with time zone default now()
);
-- 2. Enable Row Level Security
alter table properties enable row level security;
-- 3. Allow public read access (anyone can view properties)
create policy "Public read access" on properties for
select using (true);
-- 4. Allow authenticated inserts/updates/deletes (for admin)
--    Since we use anon key + env password gate, we allow all operations
--    with the anon key. For tighter security, use service_role key on server.
create policy "Allow all operations" on properties for all using (true) with check (true);
-- 5. Create a storage bucket for property images
insert into storage.buckets (id, name, public)
values ('property-images', 'property-images', true) on conflict (id) do nothing;
-- 6. Allow public read access to the storage bucket
create policy "Public read access for property images" on storage.objects for
select using (bucket_id = 'property-images');
-- 7. Allow uploads to the storage bucket
create policy "Allow uploads to property images" on storage.objects for
insert with check (bucket_id = 'property-images');
-- 8. Allow deletes from the storage bucket
create policy "Allow deletes from property images" on storage.objects for delete using (bucket_id = 'property-images');