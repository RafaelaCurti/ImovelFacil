import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

export default {
    async createUser(request, response) {
        const { name, email, password } = request.body;

        try {
            let user = await prisma.user.findUnique({ where: { email } });

            if (user) {
                return response.status(400).json({
                    error: true,
                    message: "Erro: Usuário já existe!"
                });
            }

            const HashPassword = await hash(password, 8);

            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: HashPassword
                }
            });

            return response.status(201).json({
                error: false,
                message: "Sucesso: Usuário cadastrado com sucesso!",
                user
            });

        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },

    async findAllUser(request, response) {
        try {
            const users = await prisma.user.findMany();
            
            const usersWithoutPassword = users.map(user => {
                const { password, ...userWithoutPassword } = user;
                return userWithoutPassword;
            });

            return response.json(usersWithoutPassword);

        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },
    
    async findUser(request, response) {
        try {
            const { id } = request.params; // Certifique-se de que 'id' é extraído dos parâmetros da URL

            const user = await prisma.user.findUnique({
                where: { id: Number(id) } // Converta 'id' para número
            });

            if (!user) {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }

            delete user.password;
            return response.json(user);

        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
};
