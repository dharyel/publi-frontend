import { 
    Container,
    Search,
    Icon,
    SearchInput,
 } from './styles';

interface SearchBoxProps{
    handleSearch: (event: React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>) => Promise<void>;
    searchText: string;
    setSearchText: any;
};

export const SearchBox = ({handleSearch, searchText, setSearchText}: SearchBoxProps) => {
    
    
    return(
        <Container onSubmit={(e) => handleSearch(e)}>
            <Search>
                <Icon />
                <SearchInput 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onBlur={(e) => handleSearch(e)} 
                />
            </Search>
        </Container>
        
    );
}