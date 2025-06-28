import adapter from '@hono/vite-dev-server/cloudflare'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import serverAdapter from 'hono-react-router-adapter/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getLoadContext } from './load-context'
import path from 'path'
import type { PluginOption } from 'vite'

export default defineConfig((_) => ({
  ssr: {
    target: 'webworker',
    resolve: {
      conditions: ['workerd', 'worker', 'browser'],
      externalConditions: ['workerd', 'worker'],    
      alias: {
        '@': path.resolve(__dirname, './app'),
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom',
        'react-dom/server',
        'react-router',
        'remix-auth-oauth2',
      ],
    },
  },
  plugins: [
    tailwindcss(),
    reactRouter(),
    serverAdapter({ adapter, getLoadContext, entry: './server/index.ts' }),
    tsconfigPaths(),
  ] as PluginOption[],
}))