import { Button } from "../../components/Basics/Button";
import { Container } from "../../styles/theme";

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

const Store = () => (
    <Container>     
        <Header />
        <Sidebar />
    </Container>
)

export default Store;  

{/* <Button icon>Importar lojas</Button>
<Button disable icon>Importar lojas</Button>

<Button >Salvar</Button>
<Button disable >Salvar</Button>

<Button border >Salvar</Button>
<Button border disable >Salvar</Button> */}