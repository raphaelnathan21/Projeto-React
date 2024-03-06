import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import Perfil from '../Perfil/Perfil';

const Equipe = (props) => {
    return (
        <>
            <h1 className='t-center'>{props.titulo}</h1>
            <div className='perfis'>
                <Perfil img={props.img1} titulo={props.nome1} />
                <Perfil img={props.img2} titulo={props.nome2} />
                <Perfil img={props.img3} titulo={props.nome3} />
            </div>
        </>
    )
}

export default Equipe;