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
    const [searchText, setSearchText] = useState('');
    const [addresses, setAddresses] = useState<AddressTypes[]>([] as AddressTypes[]);
    const [showMoreCounter, setShowMoreCounter] = useState(1);
    const cardsToShow = 10;

    async function getSavedAddresses() {
        const itensQnt = cardsToShow * showMoreCounter;
        const resp = await Axios.get<AddressTypes[]>(`address?_page=1&_limit=${itensQnt}`);
        
        if (resp){
            setAddresses(resp.data);
            console.log(resp.data);
        } else {
            console.log('Ocorreu um erro na requisição. Função getSavedAddresses');
        }
    }

    async function increaseShowMoreCounter(){
        setShowMoreCounter(showMoreCounter + 1);
    }

    async function handleSearch(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>){
        event.preventDefault();
        console.log(searchText);

        if (searchText === '') return;

        const itensQnt = cardsToShow * showMoreCounter;
        //const resp = await Axios.get<AddressTypes[]>(`address?_page=1&_limit=${itensQnt}`);
        const resp = await Axios.get<AddressTypes[]>(`address?addressName_like=${searchText}&_page=1&_limit=${itensQnt}`);
        
        if (resp){
            setAddresses(resp.data);
            console.log(resp.data);
        } else {
            console.log('Ocorreu um erro na requisição. Função getSavedAddresses');
        }

        setSearchText('');
    };

    useEffect(() => {
        getSavedAddresses();
    },[showMoreCounter]);

    return(
        <Container>
            <Wrapper>
                <SearchBox handleSearch={handleSearch} searchText={searchText} setSearchText={setSearchText} />

                <AddressCardsWrapper>
                    {
                        addresses && addresses.map((address) => {
                            return (
                                <AddressCard
                                    
                                    key={address.id}
                                    id={address.id as number}
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