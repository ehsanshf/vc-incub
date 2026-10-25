import { defineConfig } from 'astro/config';
import { site } from './src/config';
export default defineConfig({ site: site.domain || undefined, output: 'static' });
