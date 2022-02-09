const Product = require("../models/product");

// TODO: Currently we are not using any validation for the product. But, it is necessary to add validation later.

const productControllers = {
  createOne: async (req, res) => {
    try {
      const result = await Product.create(req.body);
      return res.status(201).json({ msg: "Resource created!", data:  { product: result }  });
    } catch (err) {
      res.status(400).json({ msg: "There's an error" });
    }
  },

  createMany: async (req, res) => {
    const { products } = req.body;
    try {
      const result = await Product.insertMany(products);
      return res.status(201).json({ msg: "Resource created!", data:  { products: result }  });
    } catch (err) {
      res.status(400).json({ msg: "There's an error" });
    }
  },
  
  getAll: async (req, res) => {
    const { tags, category, page, limit } = req.query;

    try {
      let query = {};

      if(category) {
        query = { category };
      } else if (tags) {
        query = {tags: { $in: tags.split(',') }};
      }
      const result = await Product.find(query)
      .limit(limit)
      .skip(page * limit)
      .exec();

      return res.status(200).json({ msg: "Resource found!", data: {products: result} });
    } catch (err) {
      res.status(400).json({ msg: "There's an error" });
    }
  },

  getOne: async (req, res) => {
    try {
      const result = await Product.findById(req.params.id);
      return res.status(200).json({ msg: "Resource found!", data: { product: result }  });
    } catch (err) {
      res.status(400).json({ msg: "There's an error" });
    }
  },

  updateOne: async (req, res) => {
    console.log(req.body, req.params.id);
    try {
      const result = await Product.findOneAndUpdate({id: req.params.id}, req.body, { new: true });
      return res.status(200).json({ msg: "Resource updated!", data: result });
    } catch (err) {
      console.log(err, 'err')
      res.status(400).json({ msg: "There's an error" });
    }
  },

  deleteOne: async (req, res) => {
    try {
      const result = await Product.findOneAndDelete({ id: req.params.id });
      return res.status(200).json({ msg: "Resource deleted!", data: result });
    } catch (err) {
      res.status(400).json({ msg: "There's an error" });
    }
  }
};

module.exports = productControllers;
