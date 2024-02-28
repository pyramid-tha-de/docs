import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Pyramid Docs',
    //   logo: {
    //     src: './src/assets/pyramid_logo_horizontal.webp',
				// replacesTitle: true,
    //   },
      editLink: {
        baseUrl: 'https://codeberg.org/knolljo/linktree/_edit/main/index.html',
      },
			social: {
				github: 'https://github.com/pyramid/docs.pyramid.tha.de',
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
