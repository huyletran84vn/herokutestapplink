const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/assetlinks', function(req,res,next) {
         console.log('/assetlinks');
		   // some code
		   res.redirect('/.well-known/assetlinks.json');
		})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));