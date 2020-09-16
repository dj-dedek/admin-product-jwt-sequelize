module.exports = app => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new Products
  router.post("/", products.CreateProduct);

  // Retrieve all Products
  router.get("/", products.GetAllProducts);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Products with id
  router.get("/:id", products.GetProductById);

  // // Update a Products with id
  router.put("/:id", products.UpdateProduct);

  // // Delete a Products with id
  router.delete("/:id", products.DeleteProductById);

  // // Delete all Products
  router.delete("/", products.deleteAll);

  app.use('/api/products', router);
};
