exports.getProducts = (req, res, next) => {
   res.render('admin/products', {
      pageTitle: 'Products',
      path: '/admin/products'
   })
}