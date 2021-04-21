module.exports = {
  siteTitle: 'Taiharuru Press',
  siteDescription: 'A small publisher based in Taiharuru, Aotearoa New Zealand',
  authorName: 'Barbara Carr',
  twitterUsername: '_maxpou',
  authorAvatar: 'barbra.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Barbara Carr has lived in Te Tai Tokerau (Northland New Zealand) for 20 years.  She has loved writing since her childhood and as an adult has won awards for her short stories.  With a Bachelor of Arts in Anthropology and History, Barbara is interested in how the past echoes through time.  She is a humanist and an environmentalist.
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-landscape.jpg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/logo.svg',
  postsPerPage: 6,
  disqusShortname: 'TP',
  headerTitle: 'Taiharuru Press',
  headerLinksIcon: 'logo.svg', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Books',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Contant Us',
      url: '/contact',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Cloudflare',
    url: 'https://pages.cloudflare.com/',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
        {
          label: 'Books',
          url: '/books',
        },
        {
          label: 'Contant Us',
          url: '/contact',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
          rel: 'external',
        },
      ],
    },
  ],
}
