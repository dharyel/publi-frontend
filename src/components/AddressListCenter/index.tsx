
import { AddressCard } from '../AddressCard';
import { AddressListTop } from '../AddressListTop';
import { Button } from '../Button';
import { SearchBox } from '../SearchBox';
import { 
    Container,
    Wrapper,
    AddressCardsWrapper,
} from './styles';

export const AddressListCenter = () => {
    return(
        <Container>
            <Wrapper>
                <SearchBox />

                <AddressCardsWrapper>
                    <AddressCard />
                    <AddressCard />
                    <AddressCard />
                </AddressCardsWrapper>

                <Button text="Carregar mais" />
            </Wrapper>

            
        </Container>
    );
}