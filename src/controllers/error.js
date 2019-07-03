exports.handler = (err, req, res) => {
    console.error(err.stack);
    res.status(500);
    res.render('error', {});
};