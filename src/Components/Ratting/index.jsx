import { Container } from './styles';


export function Ratting({icon: Icon, ...rest}) {
   return (
     <Container
    {...rest}>
    {Icon && <Icon />}
       
    </Container>
   )
};