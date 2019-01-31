const React = require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

module.exports = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.location = '${siteConfig.baseUrl}docs/${siteConfig.headerLinks[0].doc}'
      `
    }}
  />
);