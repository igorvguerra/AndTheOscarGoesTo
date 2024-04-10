import { Container, Content } from './styles';
import { Header } from '../../Components/Header';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../../Components/Button';
import { Ratting } from '../../Components/Ratting';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Tag } from '../../Components/Tag';
import { MovieNote } from '../../Components/MovieNote';

export function Home() {
    return(
        <Container>
            <Header />
            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    <Button icon= {FaPlus} title='Adicionar Filme'/>
                </div>

                <MovieNote data={{ 
                    title: 'Interstellar',
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags:[
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                ]
                }} />



            </Content>

        </Container>
    )
};