import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://pyramid-tha-de.github.io',
  base: '/docs',
	integrations: [
		starlight({
			title: 'Pyramid Docs',
    //   logo: {
    //     src: './src/assets/pyramid_logo_horizontal.webp',
				// replacesTitle: true,
    //   },
      editLink: {
        baseUrl: 'https://github.com/pyramid-tha-de/docs/edit/main',
      },
			social: {
				github: 'https://github.com/pyramid-tha-de',
			},
			sidebar: [
				{
					label: 'Erste Schritte',
		      items: [
		        { label: 'Team', link: '/about/team' },
		        { label: 'Prozesse', link: '/about/process' },
		      ],
				},
				{
					label: 'Stack',
					autogenerate: { directory: 'stack' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
