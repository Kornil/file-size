var express = require('express');
var multer  = require('multer');
var app = express();
app.engine('jade', require('jade').__express);
var upload = multer({ dest: 'uploads/' });

app.get('/', function (req, res) {
    res.render("index.jade");
});

app.post('/upload', upload.single('file'), function (req, res) {
    var size = "File size is "+ req.file["size"]+" bytes";
    res.send(size);
});

app.listen(8080);