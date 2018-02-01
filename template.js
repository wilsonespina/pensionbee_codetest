const Handlebars = require('handlebars');

const template = Handlebars.compile($('#template').html());
// markdown is rendered using marked.js
// docs: https://github.com/chjj/marked

$.get('https://cdn.rawgit.com/micmcg/976172/raw/70f1e0db278340bd8167c98fb880979b4571e847/gistfile1.md')
  .done(function(content) {
  // render the markdown and unescape the html
    const markdown = new Handlebars.SafeString(marked(content));
    // then we render and insert into the DOM
    const rendered = template({content: markdown});
    $('#insert-here').append(rendered);
})
