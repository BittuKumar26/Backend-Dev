app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});


app.get('/error', (req, res) => {
    throw new Error("Test error");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});