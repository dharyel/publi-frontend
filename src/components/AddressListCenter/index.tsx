
import { AddressCard } from '../AddressCard';
import { Axios } from '../../services/axios';
import { AddressTypes } from '../../models/address';
import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { SearchBox } from '../SearchBox';
import { 
    Container,
    Wrapper,
    AddressCardsWrapper,
} from './styles';

export const AddressListCenter = () => {
    const [addresses, setAddresses] = useState<AddressTypes[]>([] as AddressTypes[]);
    const [showMoreCounter, setShowMoreCounter] = useState(1);
    const cardsToShow = 10;

    async function getSavedAddresses() {
        setShowMoreCounter(showMoreCounter + 1);
        const resp = await Axios.get<AddressTypes[]>(`address?_page=1&_limit=${cardsToShow * showMoreCounter}`);
        setAddresses(resp.data);
        console.log(resp.data);
    }

    function increaseShowMoreCounter(){
        getSavedAddresses();
    }

    useEffect(() => {
        getSavedAddresses();
    },[]);

    return(
        <Container>
            <Wrapper>
                <SearchBox />

                <AddressCardsWrapper>
                    {
                        addresses && addresses.map((address) => {
                            return (
                                <AddressCard
                                    key={address.id}
                                    id={address.id}
                                    addressCategory={address.addressCategory}
                                    addressName={address.addressName}
                                    addressData={address.addressData}
                                />
                            )
                        })
                    }
                </AddressCardsWrapper>

                <Button 
                    text="Carregar mais" 
                    onClick={increaseShowMoreCounter}
                />
            </Wrapper>

            
        </Container>
    );
}