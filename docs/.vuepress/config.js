const { description } = require('../../package');
const feed_options = { canonical_base: 'https://shockzinfinity.github.io' };
const moment = require('moment');
// const { lang } = require('moment');

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ironpot devLog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  // algolia: {
  //   apiKey: '',
  //   indexName: '',
  // },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/img/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'meta',
      { name: 'google-site-verification', content: 'hwS5SAeZJGMx-RCbFtzbcv0IGdU4nIN8mAfE2iAMhSA' },
    ],
    [
      'meta',
      { name: 'naver-site-verification', content: 'cd32f721debd9633141e4a04c83fad98d36a5abc' },
    ],
    ['meta', { name: 'theme-color', content: '#2196f3' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ironPot' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/apple-icon-180x180.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/img/icons/android-icon-192x192.png',
      },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icons/favicon-32x32.png' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/icons/favicon-96x96.png' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icons/favicon-16x16.png' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#2196f3' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'ironPot42 dev log site' }],
    ['meta', { name: 'og:description', content: 'Development log for ironPot42' }],
    ['meta', { name: 'og:url', content: 'https://shockzinfinity.github.io' }],
    ['meta', { name: 'og:image', content: '/img/logo.png' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-MM4TDVZJ85' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MM4TDVZJ85');
    `,
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    displayAllHeaders: true,
    //activeHeaderLinks: false, // Default: true
    // editLinks: false,
    // editLinkText: "",
    docsDir: '',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'tags',
        link: '/tags',
      },
      {
        text: 'Tutorial',
        link: '/tutorial/',
      },
      {
        text: 'devLog',
        // link: "/dev-log/",
        ariaLabel: 'Developement Log',
        items: [
          { text: 'CentOS 8', link: '/dev-log/centos' },
          { text: 'Podman', link: '/dev-log/podman' },
          { text: 'Docker', link: '/dev-log/docker' },
          { text: 'Xwiki', link: '/dev-log/xwiki' },
          { text: 'Synology NAS', link: '/dev-log/synology' },
          { text: 'GitLab', link: '/dev-log/gitlab' },
          { text: 'GitHub', link: '/dev-log/github' },
          { text: 'SSL', link: '/dev-log/ssl' },
          { text: 'Nginx', link: '/dev-log/nginx' },
          { text: '.net core', link: '/dev-log/dotnetcore' },
          { text: 'Konva Test', link: '/dev-log/konva' },
          { text: 'VuePress', link: '/dev-log/vuepress' },
          { text: 'Vue.js', link: '/dev-log/vuejs' },
          { text: 'mssql', link: '/dev-log/mssql' },
          { text: 'mariaDB', link: '/dev-log/maria' },
          { text: 'EF core', link: '/dev-log/efcore' },
          { text: 'WordPress', link: '/dev-log/wordpress' },
          { text: 'NPM', link: '/dev-log/npm' },
          { text: 'Jenkins', link: '/dev-log/jenkins' },
          { text: 'code-server', link: '/dev-log/code-server' },
          { text: 'aws', link: '/dev-log/aws' },
          { text: 'linux', link: '/dev-log/linux' },
          { text: 'selenium', link: '/dev-log/selenium' },
          { text: 'python', link: '/dev-log/python' },
          { text: 'kubernetes', link: '/dev-log/kubernetes' },
          { text: 'PathPolisher', link: '/dev-log/path-polisher' }
        ],
      },
      {
        text: 'etc',
        link: '/etc/',
        items: [
          { text: '개발환경설정', link: '/etc/devEnv' },
          { text: 'vscode-debugging', link: '/etc/vscode-debugging' },
          { text: 'VS Code 관련', link: '/etc/vscode' },
          { text: 'mac 사용관련', link: '/etc/mac-etc' },
          { text: 'iPad 사용관련', link: '/etc/iPad' },
          { text: 'markdown', link: '/etc/markdown' },
          { text: 'windows', link: '/etc/windows' },
          { text: 'PHP', link: '/etc/php' },
          { text: 'Tools', link: '/etc/tools' },
        ],
      },
    ],
    sidebar: {
      // "/dev-log/": [
      //   {
      //     title: "devLog",
      //     collapsable: false,
      //     children: ["vscode-debugging", "centos"],
      //   },
      // ],
    },
    yuu: {
      defaultDarkTheme: true,
      colorThemes: ['red', 'blue', 'green', 'purple'],
      defaultColorTheme: 'red',
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://shockzinfinity.github.io',
        dateFormatter: time => moment(time).toISOString(),
      },
    ],
    ['feed', feed_options],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': { lang: 'ko-KR' },
  },
  theme: 'yuu',
};

/* side bar generator 작업 중 */
function getSidebarArray() {
  var fs = require('fs');
  var docsPath = __dirname + '/../';
  var sidebarArr = [];
  var homeFileList = [];
  var fileList = fs.readdirSync(docsPath);
  fileList.forEach(function (file) {
    if (file === '.vuepress') return;

    var stat = fs.lstatSync(docsPath + '/' + file);
    if (stat.isDirectory()) {
      // directory
      // title is file children is readdirSync
      var docsFolderPath = docsPath + '/' + file;
      var list = fs.readdirSync(docsFolderPath);
      sidebarArr.push(makeSidebarObject(file, list));
    } else {
      // not directory
      // title is '/' children is file
      homeFileList.push(file);
    }
  });
  sidebarArr.unshift(makeSidebarObject('', homeFileList));

  return sidebarArr;
}

function makeSidebarObject(folder, mdFileList) {
  var path = folder ? '/' + folder + '/' : '/';
  mdFileList = aheadOfReadme(mdFileList);
  var tmp = [];
  // remove .md, add path
  mdFileList.forEach(function (mdFile) {
    if (mdFile.substr(-3) === '.md') {
      mdFile = mdFile.slice(0, -3) === 'README' ? '' : mdFile.slice(0, -3);
      tmp.push(path + mdFile);
    }
  });

  mdFileList = tmp;

  // remove folder prefix number
  if (folder) {
    var dotIdx = folder.indexOf('.');
    var title = Number(folder.substr(0, dotIdx)) ? folder.substr(dotIdx + 1) : folder;
  } else {
    title = 'HOME';
  }

  return {
    title: title,
    children: mdFileList,
  };
}

function aheadOfReadme(arr) {
  // ['1.test.md', 'README.md'] => ['README.md', '1.test.md']
  var readmeIdx = arr.indexOf('README.md');
  if (readmeIdx > 0) {
    arr.unshift(arr.splice(readmeIdx, 1)[0]);
  }

  return arr;
}
