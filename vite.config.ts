
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import { writeFileSync } from 'fs';

  export default defineConfig({
    base: '/',
    plugins: [
      react(),
      {
        name: 'create-nojekyll',
        closeBundle() {
          writeFileSync('dist/.nojekyll', '');
        }
      }
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/dbb962cf5054d37b895b914a0d828245f884f78c.png': path.resolve(__dirname, './src/assets/dbb962cf5054d37b895b914a0d828245f884f78c.png'),
        'figma:asset/b15ac9d7cb47268a9eff01d0654f0f6fc13136de.png': path.resolve(__dirname, './src/assets/b15ac9d7cb47268a9eff01d0654f0f6fc13136de.png'),
        'figma:asset/a0aaf3d13acf1daac1bc8948a49e1a86d610da5d.png': path.resolve(__dirname, './src/assets/a0aaf3d13acf1daac1bc8948a49e1a86d610da5d.png'),
        'figma:asset/a087b60a651c619b0a4c49702b3a24969434dfdb.png': path.resolve(__dirname, './src/assets/a087b60a651c619b0a4c49702b3a24969434dfdb.png'),
        'figma:asset/6955a7d1f0eb00c44e2044edf183e11f290b798d.png': path.resolve(__dirname, './src/assets/6955a7d1f0eb00c44e2044edf183e11f290b798d.png'),
        'figma:asset/400459fce8dae05d8e8bac6172064ce2ac98915a.png': path.resolve(__dirname, './src/assets/400459fce8dae05d8e8bac6172064ce2ac98915a.png'),
        'figma:asset/3f8c4310e60e6c47abc46492d073d5770f9d7c51.png': path.resolve(__dirname, './src/assets/3f8c4310e60e6c47abc46492d073d5770f9d7c51.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  });