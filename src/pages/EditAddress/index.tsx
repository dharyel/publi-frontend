import { EditAddressTop } from '../../components/EditAddressTop';
import { EditAddressCenter } from '../../components/EditAddressCenter';

import { 
    Container,
 } from './styles';

export const EditAddress = () => {
    return (
        <Container>
            <EditAddressTop />
            <EditAddressCenter />
        </Container>
    );
}