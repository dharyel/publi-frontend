import { useNavigate } from 'react-router-dom';
import { PageTitleName } from '../PageTitleName';

import { 
    Container,
    Wrapper,
    BackToAddressListButton,
} from './styles';

export const EditAddressTop = () => {
    const navigate = useNavigate();

    function handleBackToAddressList() {
        navigate('/');
    }

    return(
        <Container>
            <Wrapper>
                <BackToAddressListButton onClick={handleBackToAddressList} />
                <PageTitleName text="Editar endereços" />
            </Wrapper>
        </Container>
    );
}