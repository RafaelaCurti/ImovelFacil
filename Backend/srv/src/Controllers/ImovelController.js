import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async createProperty(request, response) {
    try {
      // Verifica se o arquivo foi enviado
      if (!request.file) {
        return response.status(400).json({ message: "Nenhum arquivo enviado" });
      }

      const thumb = request.file.filename;

      // Obtém os dados do corpo da requisição
      const { id, name, email, telefone, tipo, endereco, cidade, uf, valor, descricao } = request.body;

      // Verifica se o usuário existe
      const user = await prisma.user.findUnique({ where: { id: Number(id) } });
      if (!user) {
        return response.status(404).json({ message: "Usuário inexistente" });
      }

      // Função para criar um slug
      const slugify = str => 
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

      const slug = slugify(tipo);

      // Cria a propriedade no banco de dados
      const property = await prisma.property.create({
        data: {
          thumb,
          tipo,
          endereco,
          cidade,
          uf,
          valor,
          descricao,
          name, 
          email, 
          telefone,
          slug,
          userId: user.id,
        }
      });

      return response.status(201).json({
        error: false,
        message: "Sucesso: Imóvel cadastrado com sucesso!",
        property
      });

    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  },

  async findAllProperty(request, response) {
    try {
      const properties = await prisma.property.findMany({
        include: {
          author: true, 
        },
      });
  
      return response.json(properties);
  
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  },
  

  async findProperty(request, response) {
    try {
      const { id } = request.params;  // Altere de slug para id

      const property = await prisma.property.findUnique({
        where: {
          id: Number(id)  // Use o id diretamente aqui
        }
      });

      if (!property) {
        return response.status(404).json({ message: "Não encontramos nenhum imóvel cadastrado!" });
      }

      return response.json(property);

    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  },

  async createMessage(request, response) {
    try {
      const { name, email, messagem, userId } = request.body;

      const message = await prisma.message.create({
        data: {
          name, 
          email, 
          messagem, 
          userId
        }
      });

      return response.status(201).json(message);

    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
};
