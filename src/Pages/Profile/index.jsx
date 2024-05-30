// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/auth';
import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
// import { api } from '../../services/api';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';


export function Profile() {


    return(
        <Container>
            <header>
                <button type='button' >
                    <FiArrowLeft />
                </button>

            </header>

            <Form>

                <Avatar>
                    <img src={avatarPlaceHolder} alt="user picture" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id='avatar' />

                    </label>
                </Avatar>
                <Input 
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                   
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    
                />

                <Input 
                    placeholder="Current Password"
                    type="password"
                    icon={FiLock}
                    
                />
                
                <Input 
                    placeholder="New Password"
                    type="password"
                    icon={FiLock}
                    
                />

                <Button title="Save" />
            </Form>
        </Container>
    );
};