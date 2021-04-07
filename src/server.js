import express from 'express';
import bodyParser, {json} from 'body-parser';
const app = express();
const port = 3000;

const data = [
    {
        name:"i-love-a-party",
        title: "I Love A Party",
        content: "No body is going to read this anyway",
    }
];

app.use(json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/article/:name',  (req,res) => {
    const name = req.params.name;
    const r= data.find(e => e.name==name);
    if(r) {
        res.status(200).send(r);
    } else {
        res.status(401).error("Not Found");
    }
})

app.post('/api/article', (req,res) => {
    try{
        const body = req.body;
        data.push(body);
        res.status(200).send("data saved");
    } catch(e) {
        res.status(500).send(e);
    }


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})