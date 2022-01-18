import { Button } from '../Button';
import { PageTitleName } from '../PageTitleName';
import { useNavigate } from 'react-router-dom';
import { 
    Container,
    Wrapper
} from './styles';

export const AddressListTop = () => {
    const navigate = useNavigate();

    function GoToNewAddressPage(){
        navigate('/new');
    }

    return(
        <Container>
            <Wrapper>
                <PageTitleName text="Endereços" />
                <Button onClick={GoToNewAddressPage} text="Adicionar +" />
            </Wrapper>
        </Container>
    );
}