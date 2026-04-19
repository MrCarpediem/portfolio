import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'motion/react',
      '@tsparticles/engine',
      '@tsparticles/slim',
      'react-icons/fa',
      'react-icons/fa6',
      'react-icons/si',
      'lucide-react',
      'gsap',
    ],
  },
})
