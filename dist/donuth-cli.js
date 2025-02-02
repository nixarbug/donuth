#! /usr/bin/env node
var fs = require('fs')
var nomnoml = require('./donuth.js')

var [_, _, filename, outfile] = process.argv

if (filename == '--help' || process.argv.length == 2) {
  console.log(`
  Nomnoml command line utility for generating SVG diagrams.

  Load source file and send rendered svg to stdout:

  > npx nomnoml <source_file>

  Load source file and save rendered svg to <output_file>:
  
  > npx nomnoml <source_file> <output_file>`)
  return
}

const source = nomnoml.compileFile(filename)
var svg = nomnoml.renderSvg(source)
if (outfile) {
  fs.writeFileSync(outfile, svg)
} else {
  console.log(svg)
}
