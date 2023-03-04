import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://fmokhtari.com/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    NetlifyCMS({
      config: {
        media_folder: 'public/images',
        backend: {
          name: "git-gateway",
          branch: "main"
        },
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/content/posts',
            create: true,
            delete: false,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              { name: 'description', widget: 'string', label: 'Exerpt' },
              { name: 'category', widget: 'string', label: 'Category' },
              {
                name: 'author',
                widget: 'object',
                label: 'Author',
                collapsed: true,
                fields: [
                  { label: "Name", name: "name", widget: "string" },
                  { label: "Email", name: "email", widget: "string" },
                  { label: "Website", name: "website", widget: "string", required: false },
                  { label: "Bitcoin Address", name: "btc", widget: "string", required: false },
                  { label: "Tether", name: "usdt", widget: "string", required: false },
                  { label: "Monero", name: "xmr", widget: "string", required: false },
                  { label: "Etherium", name: "eth", widget: "string", required: false }
                ]
              },
              { name: 'tags', widget: 'list', label: 'Tags' },
              { name: 'draft', widget: 'boolean', label: 'Draft', required: false },
              { name: 'date', widget: 'datetime', label: 'Publish Date' },
              { name: 'body', widget: 'markdown', label: 'Article' },
            ],
          },
          {
            name: 'projects',
            label: 'My Projects',
            folder: 'src/content/projects',
            create: true,
            delete: false,
            fields: [
              { name: "title", label: "Title", widget: "string" },
              { name: "description", label: "Description", widget: "string" },
              { name: "image", label: "Image", widget: "image" },
              { name: "website", label: "Website", widget: "string" },
              { name: "stack", label: "Stack", widget: "list" },
              { name: "category", label: "Category", widget: "string" },
              { name: 'date', widget: 'datetime', label: 'Build Date' },
              { name: 'body', widget: 'markdown', label: 'Project' },
            ]
          }
        ]
      }
    }),
    react()
  ],
  output: 'server',
  adapter: netlify()
});
