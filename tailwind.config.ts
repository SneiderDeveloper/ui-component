import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/input.js',
    './node_modules/@nextui-org/theme/dist/components/tabs.js',
    './node_modules/@nextui-org/theme/dist/components/card.js',
    './node_modules/@nextui-org/theme/dist/components/table.js',
    './node_modules/@nextui-org/theme/dist/components/breadcrumbs.js',
    './node_modules/@nextui-org/theme/dist/components/dropdown.js',
    './node_modules/@nextui-org/theme/dist/components/avatar.js',
    './node_modules/@nextui-org/theme/dist/components/user.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
