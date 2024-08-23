import { Router } from 'express';
import UsuarioController from './Controllers/UsuarioController.js';
import multer from 'multer';
import uploadConfig from './middlewares/upload.js';
import SessaoController from './Controllers/SessaoController.js';
import auth from './middlewares/auth.js';
import ImovelController from './Controllers/ImovelController.js';

const upload = multer(uploadConfig);
const router = Router();

// Rotas de Usuário
router.post('/criarUsuarios', auth, UsuarioController.createUser);
router.get('/listarUsuarios', auth, UsuarioController.findAllUser);
router.get('/consultarUsuario/:id', auth, UsuarioController.findUser); // Certifique-se de que está usando o controlador correto

// Rotas de Imóvel
router.post('/criarImovel', auth, upload.single('thumb'), ImovelController.createProperty);
router.get('/listarImoveis', auth, ImovelController.findAllProperty);
router.get('/listarImovel/:slug', auth, ImovelController.findProperty);

// Rota de Sessão
router.post('/sessao', SessaoController.createSession);

export { router };
