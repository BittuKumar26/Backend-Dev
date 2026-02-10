/*
app.use((req, res, next) => {
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
});

*/

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
