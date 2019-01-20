var aglio = require('aglio');
var path = require('path');
var fs = require('fs');
var aglio_options = {
  themeTemplate: 'default',//aglio样式
  locals: {
    myVariable: 125
  }
};
var mdFileUrl= './md/lucky.md'
var targetUrl = mdFileUrl.replace("/md/", "/mock-ui/").replace(".md", ".html");
aglio.renderFile(mdFileUrl, targetUrl, aglio_options, function(err, warnings) {
  if (err)
    return console.log(err);
  }
);