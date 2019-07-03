exports.handler = (req, res) => {
    console.warn('Not found', req.originalUrl);
    res.status(404);
    res.render('not-found', {});
};