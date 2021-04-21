module.exports = {
  siteTitle: 'Taiharuru Press',
  siteDescription: 'Taiharuru Press, we print the book',
  authorName: 'Maxence Poutord',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the last million years, Taiharuru Press has worked with a variety of book technologies. We is currently focused on front-end book development.
  On his day to day job, he is working as a senior front-end engineer at <b>B O O K</b>. He is also an occasional book reader and a mentor.
  As a book nomad, we are living where the libarys and sun are 😎 <br>
  Do you want to know more? <a href="#" rel="noopener" target="_blank">Read my book!</a>
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
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
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
