# 1) Install dependencies
npm install

# 2) Configure environment
cp .env.example .env   # then edit .env

# 3) Run the API (dev)
npm run start:dev
# Server
PORT=3000
NODE_ENV=development

# Auth (use your own strong secret)
JWT_SECRET=replace_me_with_a_long_random_value
JWT_EXPIRES_IN=7d

# Database (PostgreSQL / Neon)
DB_TYPE=postgres
DB_HOST=ep-shy-flower-a4icb1qv-pooler.us-east-1.aws.neon.tech
DB_PORT=5432
DB_USER=neondb_owner
DB_PASSWORD=your_password
DB_NAME=project-tracker
DB_SSL=true
# If you hit local cert issues, you can set:
# DB_SSL_REJECT_UNAUTHORIZED=true
npm run start:dev     # start with watch mode


API & Features
1) Authentication

JWT-based (or Supabase Auth if you wire it up)

Sign-up, login, logout

Users can access only their own organization’s data

2) Organizations (CRUD)

Create, read organizations

Fields: name

Users belong to one organization

3) Projects (CRUD)

Create, read, update, delete

Fields: title, description, status (active | completed), created_at

Each project belongs to an organization (multi-tenant isolation)

4) Analytics (implemented)

Totals per organization / per user

Active vs. completed counts

(Optional) Average completion time

Endpoints exposed in Swagger under an Analytics tag