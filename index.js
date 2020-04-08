var fs = require('fs')
var conversion = require("phantom-html-to-pdf")();
conversion({ html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
  <title>My first styled page</title>

  <title>My first styled page</title>
  <style type="text/css">
  body {
    font-family: Georgia, "Times New Roman",
          Times, serif;
    color: purple;
    background-color: #d8da3d }
  h1 {
    font-family: Helvetica, Geneva, Arial,
          SunSans-Regular, sans-serif }
  </style></head>
<body>

<!-- Site navigation menu -->
<ul class="navbar">
  <li><a href="index.html">Home page</a>
  <li><a href="musings.html">Musings</a>
  <li><a href="town.html">My town</a>
  <li><a href="links.html">Links</a>
</ul>

<!-- Main content -->
<h1>My first styled page</h1>

<p>Welcome to my styled page!

<p>It lacks images, but at least it has style.
And it has links, even if they don't go
anywhere&hellip;

<p>There should be more here, but I don't know
what yet.

<!-- Sign and date the page, it's only polite! -->
<address>Made 5 April 2004<br>
  by myself.</address>

</body>
</html>` }, function(err, pdf) {
  var output = fs.createWriteStream(__dirname + '/output.pdf')
  console.log(pdf.logs);
  console.log(pdf.numberOfPages);
    // since pdf.stream is a node.js stream you can use it
    // to save the pdf to a file (like in this example) or to
    // respond an http request.
    console.log(output);
  pdf.stream.pipe(output);
});