import { Container } from "../../styles/theme";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { StepItem } from '../../components/StepItem';
import S from './styles';
import { ItemsListSteps } from "../../components/ItemsListSteps";
 
const stepState = [
            {
                state: 'accessed',
                name: 'Dados do estabelecimento'
            },
            {
                state: 'active',
                name: 'Sócios'
            },
            {
                state: 'disabled',
                name: 'Serviços e horários'
            },
            {
                state: 'disabled',
                name: 'Frete'
            },
            {
                state: 'disabled',
                name: 'Informações adicionais'
            },
        ]


const Store = () => ( 
    <Container>
        <Header />
        <Sidebar /> 
        <S.Content>
            <S.WrapperSteps> 
                {stepState.map((item) => {
                    const { state } = item;
                    return (
                        <StepItem stepType={state}/>
                    )
                })}
            <S.WrapperList>
                {stepState.map((item) => {
                    const { state, name } = item;
                    let singleName = false;
                    if (name === "Sócios" || name === "Frete") singleName = true;
                    return (
                        <ItemsListSteps singleName={singleName} state={state} name={name}  />
                    )
                })} 
                </S.WrapperList>  
            </S.WrapperSteps> 
            <S.Section/>
        </S.Content>
    </Container>
)

export default Store;  


// Exemplos de chamadas botão genérico
// <Button icon>Importar lojas</Button>
// <Button disable icon>Importar lojas</Button>

// <Button >Salvar</Button>
// <Button disable >Salvar</Button>

// <Button border >Salvar</Button>
// <Button border disable >Salvar</Button>