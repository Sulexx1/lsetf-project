import React, {useState, useEffect} from 'react'
import './icons.css'
import {collection, doc, getDocs, addDoc} from 'firebase/firestore'
import Styled from 'styled-components'
import { mrpro } from '../../Base';


function Card() {

  const [project, setProject] = useState([]);
  const useCollect = collection(mrpro, 'participants');


  const getData = async ()=>{
    const data = await getDocs(useCollect)
    setProject(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
  }


  useEffect(()=>{
    getData()
  },[])
  return (
    <Container>
    
      <Wrap>
        {project.map((datas)=>
        

        <div key={datas}>
          <ImageHold>
      <img style={{height: '150px'}} src={datas.Avater}/>
      </ImageHold>
      <h2>Name:{datas.Name}</h2>
      <p>Description:{datas.Description}</p>

      <a className="github_float" 
      target='_blank'
      href={`${datas.Github}`}>
        <i class="fa fa-github"></i>
        </a>
      &nbsp; &nbsp; &nbsp;
      <a className="linkedin_float" 
      target='_blank'
      href={`${datas.Linkedin}`}><i class='fa fa-linkedin-square'></i></a>
      &nbsp; &nbsp; &nbsp;
      <a className="facebook_float"
      target='_blank'
      href={`${datas.Facebook}`}><i class='fa fa-facebook-square'></i></a>
      &nbsp; &nbsp; &nbsp;
      <a
        className="whatsapp_float"
        target='_blank'
      href={`${datas.WhatsApp}`}
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>      
      </div>
 
        )}
              </Wrap>
    
    </Container>
  )
}

export default Card


const Container = Styled.div`
display: flex;
justify-content: center;
background: yellow;



`
const Wrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center; 

@media screen and (max-width:860px){ 
flex-direction: column} 

div{
  /* height: 100%; */
  width: 25%;
  background: pink;
  margin: 5px;
  /* margin-right: 40px; */
  border-radius: 10px;

  &:hover{  
    transform: scale(1.2)
    }



  @media screen and (max-width:860px){ 
width:90%}
}
`
const ImageHold = Styled.div`
background-color: gray;
/* height: 150px; */
width: 100%;
display: flex;
align-items: center;
`