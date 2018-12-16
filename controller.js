const Product = require('./models');

module.exports = {
    index(request, response){
        console.log("outside")
        Product.find({}, function(err, products){
            console.log("inside")
            if(err){
                console.log(err)
                response.json(err)
            } else {
                response.json(products)
            }
        })
    },
    getOne(request, response){
        console.log("request.params>", request.params)
        Product.findOne({_id: request.params.id}, function(err, thisProduct){
            if(err){
                console.log("Error retrieving product", err)
                response.json(err)
            } else {
                response.json(thisProduct)
            }
        })
    },
    create(request, response){
        console.log(request.body)
        const product = new Product ({
            name: request.body.name,
            qty: request.body.qty,
            price: request.body.price,
        })
        product.save()
            .then(function(newProduct){
                console.log("new product created", newProduct)
                response.json(newProduct)
            })
            .catch(error => {
                const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
                console.log("+++++++",errors,"+++++++")
                response.json({error: errors})
            })
    },
    destroy(request, response){
        Product.findOneAndRemove({_id: request.params.id}, function(err){
            if(err){
                console.log("Err in destroy", err)
                response.json(err)
            } else {
                console.log("successful destroy")
                response.json(true)
            }
        })
    },
    update(request, response){
        console.log(request.body)
        Product.findById(request.body._id, function(err, product){
            if(err){
                console.log("err in update", err)
                response.json(err)
            } else {
                product.name = request.body.name;
                product.qty = request.body.qty;
                product.price = request.body.price
                product.save()
                .then(function(updatedProduct){
                    console.log("product updated", updatedProduct)
                    response.json(updatedProduct)
                })
                .catch(error => {
                    // mongoose error handling
                    const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message)
                    console.log("+++++++",errors,"+++++++")
                    response.json({error: errors})
                })
                console.log(product)
            }
        })
    }
}