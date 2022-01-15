import { AddressListCenter } from '../../components/AddressListCenter';
import { AddressListTop } from '../../components/AddressListTop';

import { 
    Container,
 } from './styles';

export const AddressList = () => {
    return (
        <Container>
            <AddressListTop />
            <AddressListCenter />

        </Container>
    );
}