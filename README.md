# Red Social API

### Url base: http://localhost:9000/api/v1
### url dbDiagram:https://dbdiagram.io/d/63c8c2f2296d97641d7aa53b 

- /auth

  - /login -> Login con las credenciales del usuario para autenticar

- /posts

  - /me -> Mis propias publicaciones
  - /user/:id -> Publicaciones de usuarios en particular
  - /:id -> Una publicación en especifico
  - /:id/comments -> Los comentarios de una publicación en especifico
  - /:id/likes -> Los likes de una publicación en especifico

- /users
  - /me -> Mi informacion de usuario
  - /:id -> Un usuario en especifico
  - /:id/follow

example ecommerce: /product/:id/add-to-cart

- /follows

  - /:id

- /followers
  - /:id

### Controllers Posts

- [x] findAllPosts
- [x] findPostById
- [x] createPost
- [x] updatePost
- [x] removePost

### Services Posts
- [ ] getAllPosts
- [ ] getPostById
- [ ] postNewPost 
- [ ] patchPost
- [ ] deletePost


