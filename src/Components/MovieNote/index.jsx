import { Container } from './styles';
import { Tag } from '../Tag';
import { Ratting } from '../Ratting';
import { FaStar, FaRegStar } from 'react-icons/fa';

export function MovieNote({ data, ...rest }) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div>
                <Ratting icon={FaStar} />
                <Ratting icon={FaStar} />
                <Ratting icon={FaStar} />
                <Ratting icon={FaStar} />
                <Ratting icon={FaRegStar} />
            </div>

            <p> {data.description} </p>

        {
            data.tags &&
            <footer>
                {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                     
                }
            </footer>
        }
        </Container>
    );
}