import React from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style'


function App() {

  const arrayPost = [
    { nomeUsuario: "José", fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
    { nomeUsuario: "Maria", fotoUsuario: 'https://picsum.photos/50/60', fotoPost: 'https://picsum.photos/200/250' },
    { nomeUsuario: "Masé", fotoUsuario: 'https://picsum.photos/50/70', fotoPost: 'https://picsum.photos/200/350' }
  ]

  const listaPost = arrayPost.map((post, index) => {
    return <Post
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
      key={index}
    />
  })

  return (
    <MainContainer>
      {listaPost}
      {console.log(arrayPost)}
    </MainContainer>
  )

}

export default App;
