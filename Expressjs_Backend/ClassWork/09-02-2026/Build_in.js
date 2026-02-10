app.use(express.json());

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send("Data Received");
});
