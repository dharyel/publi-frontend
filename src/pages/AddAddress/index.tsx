import { AddAddressTop } from '../../components/AddAddressTop';
import { AddAddressCenter } from '../../components/AddAddressCenter';

import { 
    Container,
 } from './styles';

export const AddAddress = () => {
    return (
        <Container>
            <AddAddressTop />
            <AddAddressCenter />
        </Container>
    );
}