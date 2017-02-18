"use strict";
/**
 * Created by thomas on 2017-02-18.
 */
var fs = require('fs');
var path = require('path');
var juice = require('juice');
var variables = require("./variables");

var buildPath = path.join(__dirname, 'build');

if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}

var templatePath = path.join(__dirname, 'email.html');
var template = fs.readFileSync(templatePath, "utf-8");

var replaceVariables = function(baseTemplate, templateVariables){
  Object.keys(templateVariables).forEach(function(key){
    var value = templateVariables[key];
    var begin = '<!-- ' + key + '_begin_marker -->';
    var end = '<!-- ' + key + '_end_marker -->';

    var re = new RegExp('(' + begin + ')(.|\n)*(' + end + ')');
    //console.log(baseTemplate.match(re));
    baseTemplate = baseTemplate.replace(
      re,
      value
    );
  });
  return baseTemplate
};

var renderInlineCSSTemplate = function(baseTemplate){
  var options = {
  };
  return juice(baseTemplate, options);
};


Object.keys(variables).forEach(function(templateName){
  var render = replaceVariables(template, variables[templateName]);
  render = renderInlineCSSTemplate(render);

  var renderPath = path.join(buildPath, templateName + '.html');
  fs.writeFileSync(renderPath, render, 'utf8');

});