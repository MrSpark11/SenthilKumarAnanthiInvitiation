import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (Or whatever framework plugin you are using, if any)

export default defineConfig({
  plugins: [react()],
  base: '/SenthilKumarAnanthiInvitiation/', // ⚠️ CRUCIAL: Replace with your exact repository name
})