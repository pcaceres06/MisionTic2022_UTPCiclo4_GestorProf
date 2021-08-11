import React from 'react'
// import Icon1 from '../../images/undraw_Asset_selection_re_k5fj.png'
// import Icon2 from '../../images/img3.svg'
// import Icon3 from '../../images/img6.svg'
import {ServicesContainer, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesCard} from './ServicesElements'

const Presenta = (
    {img,
    alt,
    heading,
    text
    // lightBg
}
) => {
    return (
        <>
            <ServicesContainer lightBg={true} id = 'documentos'>

                {/* <ServicesH1>Documentos</ServicesH1> */}
                <ServicesWrapper >
                    <ServicesCard>
                        <ServicesIcon src={img}  alt={alt}/>
                        <ServicesH2>{heading}</ServicesH2>
                        <ServicesP>{text}</ServicesP>
                    </ServicesCard>

                </ServicesWrapper>
              
            </ServicesContainer>  
        </>
    )
}

export default Presenta
