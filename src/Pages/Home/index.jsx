import { Container, Content, Menu, SearchBar } from './styles';
import { Header } from '../../Components/Header';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../../Components/Button';
import { Ratting } from '../../Components/Ratting';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Tag } from '../../Components/Tag';
import { MovieNote } from '../../Components/MovieNote';


import { TextButton } from '../../Components/TextButton';

export function Home() {
    return(
        <Container>
            <Header />
            <Menu>
                <li><TextButton title="Todos" $isActive={true} /></li>
                <li><TextButton title="Drama"/></li>
                <li><TextButton title="Ação"/></li>
              
            </Menu>
            <Content>
                
                <div>
                    <h1>Meus Filmes</h1>
                    <SearchBar placeholder="Pesquisar pelo título do filme"/>
                    <Button icon= {FaPlus} title='Adicionar Filme'/>
                </div>

                <MovieNote data={{ 
                    title: 'Interstellar',
                    tags:[
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Família'}
                ]
                }} />
                <MovieNote data={{ 
                    title: 'Batman',
                    tags:[
                        {id: '1', name: 'Comics'},
                        {id: '2', name: 'Superhero'},
                        {id: '3', name: 'Ação'}
                ]
                }} />
                <MovieNote data={{ 
                    title: 'Star Wars',
                    tags:[
                        {id: '1', name: 'Ficção Científica'},
                        {id: '2', name: 'Ação'},
                        
                ]
                }} />
                <MovieNote data={{ 
                    title: 'The Notebook',
                    tags:[
                        {id: '1', name: 'Drama'},
                        
                        
                ]
                }} />



            </Content>

        </Container>
    )
};