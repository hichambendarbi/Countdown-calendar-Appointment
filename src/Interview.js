import React, {useState} from 'react'
import styled from 'styled-components'

const SlideInterview = styled.div`
padding: 1em;
width: 300px;
height: 60px;
border: 2px solid gray;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 900;
color: #009688;
`

const Interview = () => {
    const Welcome = ['Passation test Avec', 'Fatima Zahrae EL ABOUDI', 'Chargé de recrutement IT', 'Le Vendredi 12 Juin'];
    const [formData, setFormData] = useState({
        init: Welcome[0],
        test: 0
    })

    const {init, test} = formData;
    
   var conteur;
   const Len = Welcome.length;
    const ChangeImage = () => {
          if(conteur===2000 && test<Len) {
            setFormData({
                init: Welcome[test],
                test: test + 1
              })
      }
      if(test===Len) {
        setFormData({
            init: Welcome[0],
            test: 0
          })
      }
      console.log(test)
    }

    setTimeout(()=> ChangeImage(), conteur = 2000)
    return (
            <SlideInterview>
                {init}
            </SlideInterview>
    )
}

export default Interview
