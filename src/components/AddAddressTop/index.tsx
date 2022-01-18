import { useNavigate } from 'react-router-dom';
import { PageTitleName } from '../PageTitleName';

import { 
    Container,
    Wrapper,
    BackToAddressListButton,
} from './styles';

export const AddAddressTop = () => {
    const navigate = useNavigate();

    function handleBackToAddressList() {
        navigate('/');
    }

    return(
        <Container>
            <Wrapper>
                <BackToAddressListButton onClick={handleBackToAddressList} />
                <PageTitleName text="Cadastro de endereço" />
            </Wrapper>
        </Container>
    );
}