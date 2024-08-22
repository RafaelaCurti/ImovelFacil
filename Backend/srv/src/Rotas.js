import { Router } from "express";
import UsuarioController from "./Controllers/UsuarioController.js";
import multer from 'multer';
import uploadConfig from "./middlewares/upload.js";
import SessaoController from "./Controllers/SessaoController.js";
import auth from "./middlewares/auth.js";
import ImovelController from "./Controllers/ImovelController.js";

const upload = multer(uploadConfig);
const router = Router();

router.post('/criarUsuarios', auth, UsuarioController.createUser);
router.get('/listaUsuarios', auth, UsuarioController.findAllUser);
router.get('/consultarUsuario', auth, UsuarioController.findUser);

router.post('/criarImovel', auth, upload.single("thumb"), ImovelController.createProperty);

router.post('/sessao', SessaoController.createSession);

export {router}