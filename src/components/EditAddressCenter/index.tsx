
import { AddressCard } from '../AddressCard';
import { Axios } from '../../services/axios';
import { AddressTypes } from '../../models/address';
import { useState, useEffect } from 'react';
import { Button } from '../Button';

import { 
    Container,
    Wrapper,
} from './styles';

export const EditAddressCenter = () => {
    async function handleSaveEditAddress () {

    }

    return(
        <Container>
            <Wrapper>
                

                <Button 
                    text="Editar" 
                    onClick={handleSaveEditAddress}
                />
            </Wrapper>

            
        </Container>
    );
}