import { 
    Container,
    Search,
    Icon,
    SearchInput,
 } from './styles';

interface SearchBoxProps{
    handleSearch: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => Promise<void>;
    searchText: string;
    setSearchText: any;
};

export const SearchBox = ({handleSearch, searchText, setSearchText}: SearchBoxProps) => {
    
    
    return(
        <Container onSubmit={(e) => handleSearch(e)}>
            <Search>
                <Icon onClick={(e) => handleSearch(e)} />
                <SearchInput 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} 
                />
            </Search>
        </Container>
        
    );
}