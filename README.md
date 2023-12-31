# eCommerce-API

An eCommerce API wherein admin can manage product inventory. The tech stack includes NodeJS and MongoDB.

How to Setup the eCommerce API on your local device?

    It's simple! Follow the below instructions:
    1) Clone this repository using git clone git@github.com:Sheshant-Manure/eCommerce-API.git in the VS Code terminal.
    2) Make sure you have Postman extention installed for API testing.
    3) In the terminal run the cmd: npm start to start the application.
    4) Now, open the terminal and run the following requests-

List of npm installation-
    
    1) ExpressJS - npm install express
    2) Mongoose ODM - npm install mongoose
    3) Body Parser - npm install body-parser

List of API requests and their uses:

    1) GET request: http://localhost:8000/ 
        response: Welcome to eCommerce API

    2) POST request: http://localhost:8000/products/create
        raw JSON - 
        {
            "productid": 2,
            "name": "smartphone",
            "quantity": 36
        }

        response: 
            {
                "data": {
                    "product": {
                        "productid": 2,
                        "name": "smartphone",
                        "quantity": 36
                    }
                }
            }
    3) GET request: http://localhost:8000/products
        response: 
        {
            "data": {
                "products": [
                    {
                        "_id": "649aa469d33295e4b241fec2",
                        "productid": 1,
                        "name": "laptop",
                        "quantity": 30,
                        "__v": 0
                    },
                    {
                        "_id": "649dfce6163d9c719d994382",
                        "productid": 2,
                        "name": "smartphone",
                        "quantity": 36,
                        "__v": 0
                    }
                ]
            }
        }
    
    4) DELETE request: http://localhost:8000/products/2
        response:
        {
            "data": {
                "message": "Product deleted successfully"
            }
        }

    5) POST request: http://localhost:8000/products/1/update_quantity/10
        response:
        {
            "_id": "649aa469d33295e4b241fec2",
            "productid": 1,
            "name": "laptop",
            "quantity": 40,
            "__v": 0
        }