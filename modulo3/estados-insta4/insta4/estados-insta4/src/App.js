import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import Post from './components/Post/Post';
import { MainContainer, Forms} from './style'


function App() {

  const [inputName, setInputName] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputProfile, setInputProfile] = useState("");

  const [arrayPost, setPost] = useState([
    { nomeUsuario: "José", fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
    { nomeUsuario: "Maria", fotoUsuario: 'https://picsum.photos/50/60', fotoPost: 'https://picsum.photos/200/250' },
    { nomeUsuario: "Masé", fotoUsuario: 'https://picsum.photos/50/70', fotoPost: 'https://picsum.photos/200/350' }
  ])

  const listaPost = arrayPost.map((post, index) => {
    return <Post
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
      key={index}
    />
  })

  const handleInputName = (evento) => {
    setInputName(evento.target.value)
  }

  const handleInputImage = (evento) => {
    setInputImage(evento.target.value)
  }

  const handleInputProfile = (evento) => {
    setInputProfile(evento.target.value)
  }

  const addPost = (evento) => {
    evento.preventDefault();

    const newPost = { nomeUsuario: inputName, fotoUsuario: inputProfile, fotoPost: inputImage }
    const uploadPost = [...arrayPost, newPost]
    setPost(uploadPost)
  }



  return (
    <MainContainer>
      <Forms>
        <label className='Label'>Nome:</label>
        <input
          className='Input'
          placeholder='Insira um Nome'
          onChange={handleInputName}
          value={inputName}
        />
        <br />
        <label className='Label'>Perfil:</label>
        <input
          className='Input'
          placeholder='URL do Perfil'
          onChange={handleInputProfile}
          value={inputProfile}
        />
        <br />
        <label className='Label'>Post:</label>
        <input
          className='Input'
          placeholder='URL do Post'
          onChange={handleInputImage}
          value={inputImage}
        />
        <br />
        <button onClick={addPost}>Postar</button>

      </Forms>
      {listaPost}
    </MainContainer>
  )

}

export default App;
