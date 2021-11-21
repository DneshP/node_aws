const routes = (app) => {
    app.route('/')
        .get((request, response) => {
            response.render('index', { title: "App deployed via aws."});
    });
}

export default routes;