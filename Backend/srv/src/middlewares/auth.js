import jwt from "jsonwebtoken";

export default function auth(request, response, next) {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.json({ message: "Não autorizado" }, 401)
    }

    const token = authorization.replace('Bearer ', '').trim();
    try {
        const data = jwt.verify(token, '972da9847804d3508875b06ae3069529');
        const { id } = data;
        request.userId = id;
        return next();
    } catch {
        return response.json({ message: "Token Inválido" }, 401)
    }
}