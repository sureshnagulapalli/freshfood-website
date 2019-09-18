var express = require('express'),
	app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res)=>{
	res.render('index');
})


app.listen(process.env.PORT, process.env.ID, ()=>{
	console.log('app started');
})