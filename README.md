## Notes

- The **database is live**.
- The **frontend and backend are not deployed** yet—run them locally.

---
## install dep 
npm i 
## Backend

# Start the API server:

npm run start:dev


# Runs on: http://localhost:8080

# Swagger docs: http://localhost:8080/docs

# Repo: https://github.com/raneemabujamous/project-tracker-backend

## Frontend

# Start the web app:

 npm run dev


# Repo: https://github.com/raneemabujamous/project-tracker-frontend



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


## API & Features
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

 Average completion time

Endpoints exposed in Swagger under an Analytics tag