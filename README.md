# Timers v2

Frontend application SPA that allows you to create, save and share timers.

See demo <a href="https://timers.franlo.dev" target="_blank">timers.franlo.dev</a>

---

### Project Description

- **Creating** timers
- **Save** timers you create or share
- **Share** timer via URL
- **List** of saved timers
- **Synchronization between tabs** of the same browser
- **Storage in the browser**'s Local Storage
- **Own router** for managing different views
- **Zero backend**, data is stored in the browser

---

### Run the project in development mode

1. Download the repository.
2. Install dependencies `pnpm install`.
3. Run `pnpm dev`.

---

### Run the project in demo mode
Inserts three timers when opening the URL, when there is no data in the browser Local Storage.

1. Download the repository.
2. Install dependencies `pnpm install`.
3. Set `VITE_LOAD_DEMO` environment variable to "true", in the `.env.demo` file.
4. Run `pnpm dev:demo`.

---

### Stack

- pnpm v10
- Vite v6
- Reactjs v19
- Typescript v5
- Tailwindcss v3
- Luxon v3
