// Import Router
import { Router } from 'express';

// Importando al controlador Home
import homeController from '@server/controllers/homeController';

// Creando la instancia de un router
const router = new Router();

// GET '/'
router.get('/', homeController.index);

// GET '/iniciar'
router.get('/iniciar', homeController.iniciar);

// GET '/registrar'
router.get('/registrar', homeController.registrar);

// GET '/solicitud'
router.get('/solicitud', homeController.solicitud);

// Exportando el router que maneja las subrutas
// para el controlador Home
export default router;