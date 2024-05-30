import { Container, Content, Menu, SearchBar } from './styles';
import { Header } from '../../Components/Header';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../../Components/Button';

import { MovieNote } from '../../Components/MovieNote';


import { TextButton } from '../../Components/TextButton';

export function Home() {
    return(
        <Container>
            <Header />
            <Menu>
                <li><TextButton title="All" $isActive={true} /></li>
                <li><TextButton title="Drama"/></li>
                <li><TextButton title="Action"/></li>
              
            </Menu>
            <Content>
                
                <div>
                    <h1>My Movies</h1>
                    <SearchBar placeholder="Search by movie title"/>
                    <Button icon= {FaPlus} title='Add New Movie'/>
                </div>

                <MovieNote data={{ 
                    title: 'Interstellar',
                    tags:[
                        {id: '1', name: 'Science Fiction'},
                        {id: '2', name: 'Drama'},
                        {id: '3', name: 'Family'}
                ]
                }} />
                <MovieNote data={{ 
                    title: 'Batman',
                    tags:[
                        {id: '1', name: 'Comics'},
                        {id: '2', name: 'Superhero'},
                        {id: '3', name: 'Action'}
                ]
                }} />
                <MovieNote data={{ 
                    title: 'Star Wars',
                    tags:[
                        {id: '1', name: 'Science Fiction'},
                        {id: '2', name: 'Action'},
                        
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