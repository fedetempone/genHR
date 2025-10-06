export const validateContact = (req, res, next) => {
  const { name, email, company, phone, message } = req.body;

  // regex para links, etiquetas o scripts
  const maliciousPattern = /(https?:\/\/|www\.|<[^>]*>|script)/i;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{8,15}$/;

  const sanitize = (str) => (typeof str === "string" ? str.trim() : "");

  const fields = {
    name: sanitize(name),
    email: sanitize(email),
    company: sanitize(company),
    phone: sanitize(phone),
    message: sanitize(message),
  };

  // revisol os links o los tags
  for (const [field, value] of Object.entries(fields)) {
    if (maliciousPattern.test(value)) {
      return res
        .status(400)
        .json({ msg: `El campo "${field}" contiene enlaces o etiquetas no permitidas.` });
    }
  }

  // validacion email
  if (!emailRegex.test(fields.email)) {
    return res.status(400).json({ msg: "Email inválido." });
  }

  // validacion telefono
  if (fields.phone && !phoneRegex.test(fields.phone)) {
    return res.status(400).json({ msg: "Teléfono inválido." });
  }

  // si ta todo ok reemplazo el req.body por la version limpia
  req.body = fields;
  next();
};
