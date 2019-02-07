// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const path = require('path');
// const fs = require('fs')

// app.get('/', function(request, response) {
//   console.log('Home page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html');
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'MxOpportunity');
//     data = data.replace(/\$OG_DESCRIPTION/g, "Moda y Tendencia de Oportunidades de Libre Comercio entre México y el Mundo");
//     result = data.replace(/\$OG_IMAGE/g, 'https://mxopportunity.com/static/media/mxopportunity.425ad66a.jpg');
//     response.send(result);
//   });
// });

// app.get('/capacitacion', function(request, response) {
//   console.log('Capacitacion visitada');
//   const filePath = path.resolve(__dirname, './build', 'index.html')
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'Capacitacion');
//     data = data.replace(/\$OG_DESCRIPTION/g, "");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });

// app.get('/consultoria', function(request, response) {
//   console.log('consultoria visitada');
//   const filePath = path.resolve(__dirname, './build', 'index.html')
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'Consultoria');
//     data = data.replace(/\$OG_DESCRIPTION/g, "Consultoria visitada");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });



// app.use(express.static(path.resolve(__dirname, './build')));
// app.get('*', function(request, response) {
//   const filePath = path.resolve(__dirname, './build', 'index.html');
//   response.sendFile(filePath);
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));
