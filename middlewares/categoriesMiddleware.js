import categoriesSchema from "../schemas/categoriesSchema.js";

export function validateCategories(req, res, next) {
    const category = req.body;
    const validation = categoriesSchema.validate(category);
    if (validation.error) {
      return res.sendStatus(400);
    }
    next();
  }