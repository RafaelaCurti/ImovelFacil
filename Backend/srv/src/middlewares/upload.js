import multer from "multer";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

// Obtenha o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Defina os diretórios
const tempFolder = path.resolve(__dirname, "../", "../", "uploads");
const tempUpload = path.resolve(tempFolder, "uploads");

const uploadConfig = {
  directory: tempFolder,
  uploadFolder: tempUpload,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const hashFile = crypto.randomBytes(10).toString("hex");
      const nameFile = `${hashFile}-${file.originalname}`;

      return callback(null, nameFile);
    }
  })
};

export default uploadConfig;
