# About
This is a simple task management for my practice project as I start my internship. Made with next.js + laravel 11 with breeze authentication. Boilerplate of the auth setup is cloned from [here](https://github.com/laravel/breeze-next).

## Tools

🎨 Frontend: [Next.js 16](https://nextjs.org/).

⚛️ Data fetching: [Axios](https://axios-http.com/docs/intro) and [React query](https://tanstack.com/query/latest)

🗒️ State management: [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction).

🪣 Backend: [Laravel 11](https://laravel.com/docs/11.x).

## Backend Repo
Also check the backend repository [HERE](https://github.com/Michael-Gatmaitan/task-management-api)
## Usage/Examples

```javascript
git clone https://github.com/Michael-Gatmaitan/task-management-frontend
cd task-management-frontend
npm install
```

Setup environment variables at .env.local
```javascript
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000 // backend localhost port
```
Set up the backend, clone [HERE](https://github.com/Michael-Gatmaitan/task-management-api) and check [README.md](https://github.com/Michael-Gatmaitan/task-management-api/blob/main/README.md) for setup of the backend

```javascript
npm run dev
```