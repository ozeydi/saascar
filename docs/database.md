# SaasCar Database (MVP)

This document describes the current database schema for the MVP of SaasCar.

## Analyses Table

Stores vehicle analysis submissions.

| Column Name | Type        | Description                                  |
| ----------- | ----------- | -------------------------------------------- |
| id          | UUID        | Primary key, auto-generated                  |
| created_at  | timestamptz | Timestamp of submission, defaults to `now()` |
| listing_url | text        | Original car listing URL                     |
| make        | text        | Vehicle make (e.g., Toyota)                  |
| model       | text        | Vehicle model (e.g., Camry)                  |
| year        | int         | Vehicle year                                 |
| engine      | text        | Engine type / displacement                   |
| fuel_type   | text        | Gasoline, Diesel, Hybrid, Electric, etc.     |
| mileage     | int         | Vehicle mileage                              |
| price       | int         | Asking price                                 |
| country     | text        | Country where vehicle is located             |
| city        | text        | City (optional)                              |

> Note: Future columns like `risk_score`, `verdict`, and `result` will be added when we implement the analysis engine.

## Row Level Security (RLS)

### Policies

- Public insert: allows anonymous users to submit vehicle analyses (MVP).
- Public select: allows reading analysis results by ID.

> Note: Policies will be restricted to authenticated users in a later phase.
