const donuth = require('../dist/donuth');

const badInput = donuth.renderSvg('bad input')

module.exports = function (req, res) {
  res.writeHead(200, {'Content-Type': 'image/svg+xml'})
  try {
    var input = req.url.split('source=')[1]
    if (!input) throw new Error()
    var source = decodeURIComponent(input)
    console.log('rendering: ' + source)
    res.end(donuth.renderSvg(source))
  }
  catch (e) {
    res.end(badInput)
  }
}
