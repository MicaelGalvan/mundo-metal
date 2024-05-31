import app from './app.js';
import { sequelize } from './src/models/index.js';
import config from './src/config/appConfig.js';

const PORT = config.port || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});