import { TitleName } from './styles';

interface PageTitleNameProps{
    text: string;
}

export const PageTitleName = ({text}: PageTitleNameProps) => {
    return (
        <TitleName>{text}</TitleName>
    );
}