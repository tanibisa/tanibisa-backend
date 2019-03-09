const Products = require('./model')

const controller = {
  /////////////////////////////////
  getProducts: async (req, res, next) => {
    const allProducts = await Products.find()

    res.status(200).send({
      message: 'List of all products',
      products: allProducts
    })
  }
  // ,
  // createNewProducts: async (req, res) => {
  //   const token = req.body.authorization.split(' ')[1]
  //   // const decodedToken = await helpers.verifyToken(req.token)
  //   const newCommodities = {
  //     // author: decodedToken.sub,
  //     name: req.body.name,
  //     price: req.body.price,
  //     image: req.body.image,
  //     description: req.body.description
  //   }
  //   res.send({
  //     message: 'new product has been created!'
  //   })
}

module.exports = controller
