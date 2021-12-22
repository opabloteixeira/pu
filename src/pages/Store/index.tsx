
import { Container } from "../../styles/theme";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { StepItem } from '../../components/StepItem';


import S from './styles';

const Store = () => ( 
    <Container>
        <Header />
        <Sidebar /> 
        <S.Content>
            <div>
                <StepItem active={false} accessed={true} disable={false} />
                <StepItem active={true} accessed={false} disabled={false} /> 
                <StepItem active={false} accessed={false} disabled={true} />
                <StepItem active={false} accessed={false} disabled={true} />
                <StepItem active={false} accessed={false} disabled={true} />
            </div> 
            <S.Section/>
           
        </S.Content>
    </Container>
)

export default Store;  

{/* Exemplos de chamadas botão genérico
<Button icon>Importar lojas</Button>
<Button disable icon>Importar lojas</Button>

<Button >Salvar</Button>
<Button disable >Salvar</Button>

<Button border >Salvar</Button>
<Button border disable >Salvar</Button> */}