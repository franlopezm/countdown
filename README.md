# Timers v2

Application that allows you to create, save and share timers

<!-- * <a href="https://franlopezm.github.io/countdown/#/ZW5kRGF0ZT0yMDIxLTAxLTIxVDIxOjAwOjAwJnRpbWV6b25lPUV1cm9wZS9NYWRyaWQmaW5pdERhdGU9MjAxOS0wOS0yOVQxMjowMDowMA==" target="_blank">franlopezm.github.io/countdown</a> -->

---

## Project Description

- **Creating** timers
- **Save** timers you create or share
- **Share** timer via URL
- **List** of saved timers
- **Synchronization between tabs** of the same browser
- **Storage in the browser**'s Local Storage
- **Own router** for managing different views
- **Zero backend**, data is stored in the browser

---

## Stack

- pnpm v10
- Vite v6
- Reactjs v19
- Typescript v5
- Tailwindcss v3
- Luxon v3

---

### Run the project in development mode

1. Download the repository.
2. Install dependencies `pnpm install`.
3. Run `pnpm dev`.


### Run the project in demo mode
Inserts three timers when opening the URL, when there is no data in the browser Local Storage.

1. Download the repository.
2. Install dependencies `pnpm install`.
3. Set `VITE_LOAD_DEMO` environment variable to "true", in the `.env.demo` file.
4. Run `pnpm dev:demo`.
