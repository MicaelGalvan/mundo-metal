import express from 'express';
const router = express.Router();
import { list, get, remove, create, update } from '../controllers/user';
import { validateCreate } from '../validators/user';

router.get('/all', list);
router.get('/:id', get);
router.post('/', validateCreate, create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;