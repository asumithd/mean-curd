require('./database')
const app=require('./app');
app.listen(app.get('port'));
console.log('server on ', app.get('port'));