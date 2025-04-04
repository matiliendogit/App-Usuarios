async function authMiddleware(req, res, next) {
    next(); // Llama a next() para continuar con la siguiente función de middleware o ruta
}

export default authMiddleware;