const express = require('express')
const app = express();

//controllers

const sendFile = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}

const sendHtmlResponse = (req, res, next) => {
    res.send('<h1> Welcome to my Website!!! <h1>')
}


const sendFileResponse = (req, res, next) => {
    res.send('file content goes here');
}

const sendDataResponse = (req, res, next) => {
    const name = req.query.name || 'Guest'
    const data = [{ name: 'Chris' }, { name: 'Killian' }, { name: 'Willy' }];
    res.send({ message: `Hello,${name}!`, data: data });
}

//endpoints
app.get('/', sendHtmlResponse);
app.get('/file', sendFile);

/* FEEDBACK: These two endpoints send data back to 
the client while the two above send back HTML. For these
endpoints, start them with `/api/` */
app.get('/data', sendDataResponse);
app.get('/fileresponse', sendFileResponse);



//listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));