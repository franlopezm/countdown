/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOAD_DEMO?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
