import app from './app.js';
import sequelize from './src/config/database.js';
import config from './src/config/appConfig.js';

const PORT = config.port || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
