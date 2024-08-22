import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
const prisma = new PrismaClient();
import Jwt from "jsonwebtoken"

export default {
    async createSession(request, responde) {

        try {
            const { email, password } = request.body;
            let user = await prisma.user.findUnique({ where: { email } })

            if (!user) {
                return response.status(400).json({
                    error: true,
                    message: "Erro: Usuário incorreto"
                });
            }

            let checkPassword = await compare(password, user.password);
            if (!checkPassword) {
                return response.status(400).json({
                    error: true,
                    message: "Erro: Senha incorreta"
                });
            }

            let token = Jwt.sign({ id: user.id }, "972da9847804d3508875b06ae3069529", {
                expiresIn: "1d"
            });
            delete user.password;
            
            return responde.json({ user, token })

        }
        catch (error) {
            return response.status(500).json({ message: error.message });
        }

    }
}