export const siteData = {
  title: "Welcome to my portfolio",
  description: "This is my personal website. I use it as my portfolio",
  author: "Farouk Mokhtari",
  brand: "Farouk",
};

export const menuList = [
  { text: "Home", href: "/", external: false },
  { text: "Projects", href: "/projects", external: false },
  {
    text: "Source Code",
    href: "https://github.com/duncan-f/fmokhtari.com/",
    external: true,
  },
];
export const projectsList = [
  {
    title: "Blog",
    description:
      "This is my blog, it is powered by Astro. It's where I share my knowledge in technology and cyber security.",
    image: "/images/projects/blog.png",
    href: "/projects/blog",
    url: "https://duncan-f.github.io/",
    techs: ["Astro", "React"],
    published: 2022,
  },
];

export const colabList = [
  {
    title: "S.B. Géoservice Inc.",
    description:
      "This is a website I created for a friend. His company operates in geoscience and geotechnical engineering.",
    image: "/images/projects/geoservices.png",
    href: "/projects/geoservices-inc",
    url: "https://sboulila.netlify.app/",
    techs: ["Astro", "React"],
    published: 2023,
  },
];

export const techsList = [
  {
    name: "Python",
    href: "/icons/python.png",
  },
  {
    name: "Javascript",
    href: "/icons/js.png",
  },
  {
    name: "Typescript",
    href: "/icons/typescript.png",
  },
  {
    name: "PHP",
    href: "/icons/php.png",
  },
  {
    name: "NodeJS",
    href: "/icons/nodejs.png",
  },
  {
    name: "MySQL",
    href: "/icons/mysql.png",
  },
  {
    name: "Laravel",
    href: "/icons/laravel.png",
  },
  {
    name: "Django",
    href: "/icons/django.png",
  },
  {
    name: "React",
    href: "/icons/react.png",
  },
];
