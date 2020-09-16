# admin-product-sequelize-jwt
Implement Refresh Token Authentication Using Node, Sequelize and JWT

Clone the repository and switch to the project directory.

Install dependencies using ```npm install``` command then run the code using following command.

```npm run serve```

Give following API Products calls to check the working.

post product => 
```http://localhost:8080/api/products```

get product all => 
```http://localhost:8080/api/products```

get product by id => 
```http://localhost:8080/api/products/:id```

put product by id => 
```http://localhost:8080/api/products/:id```

delete product by id => 
```http://localhost:8080/api/products/:id```

delete product all => 
```http://localhost:8080/api/products/:id```

Give following API Authentication calls to check the working.

``http://localhost:8080/api/login```

post data => 

```
{
	"email": "test@gmail.com",
	"name": "Test"
}
```

```http://localhost:8080/api/secure```

in headers provide,

```x-access-header=access token from the previous API```

```http://localhost:8080/api/token-refresh```

post data => 

```
{
    "email": "test@gmail.com",
	"name": "Test",
	"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlZGVrQGdtYWlsLmNvbSIsIm5hbWUiOiJEZWRlayIsImlhdCI6MTYwMDI0NjY5OCwiZXhwIjoxNjAwODUxNDk4fQ.T-bVtCI8BhGElyf4SO5e0ozRk1up-klF1bf5_Y1_uDE"
}
```

