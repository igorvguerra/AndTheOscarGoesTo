
import { Container, Form, Background } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';



import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';


export function SignIn() {
    

    return(
        <Container>
            <Form>
                <h1>And the Oscar goes to</h1>
                <p>Be one of the Oscar's judges and enter your movies reviews!</p>

                <h2>Login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    
                />

                <Input 
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    
                />

                <Button title="Enter"  />

                
            </Form>
            <Background/>
        </Container>
    );
}