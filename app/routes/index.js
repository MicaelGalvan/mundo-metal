import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Utility function to remove the file extension
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

// Get the current directory name (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the current directory
const pathRouter = __dirname;

// Read all files in the current directory
fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithoutExt);
    console.log(fileWithoutExt);
    if (!skip) {
        import(`./${fileWithoutExt}.js`).then((module) => {
            router.use(`/${fileWithoutExt}`, module.default);
        }).catch((error) => {
            console.error(`Failed to load route ${fileWithoutExt}:`, error);
        });
    }
});

// Handle 404 errors
router.get('*', (req, res) => {
    res.status(404).send({ error: 'Not Found' });
    // httpError(res, { message: 'Not Found', status: 404 });
});

export default router;
