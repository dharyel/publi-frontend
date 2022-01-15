import { Button } from '../Button';
import { PageTitleName } from '../PageTitleName';
import { 
    Container,
    Wrapper
} from './styles';

export const AddressListTop = () => {
    return(
        <Container>
            <Wrapper>
                <PageTitleName text="Endereços" />
                <Button text="Adicionar +" />
            </Wrapper>
        </Container>
    );
}