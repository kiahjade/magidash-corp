const GetDashboards = async (req, res, next) => {
    let sql = 'SELECT * FROM dashboards';
    res.locals.sql = sql;
    next();
}

const AddDashboard = async (req, res, next) => {
    let sql = 'INSERT INTO dashboards SET ?'
    let dashboard = {
        id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    res.locals.sql = sql;
    res.locals.dashboard = dashboard;
    next();
}

module.exports = { GetDashboards, AddDashboard }