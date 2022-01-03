import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  FiUsers,
  FiCoffee,
  FiDollarSign,
  FiUserCheck,
  FiShield,
  FiFileText,
  FiMonitor,
} from "react-icons/fi";
import styles from "./styles.module.scss";

// React Accessible Accordion
export function AccordionRA() {
  return (
    <Accordion className={styles.accordion} preExpanded={["1"]}>
      <AccordionItem uuid="1" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiUsers />
              </div>
              <p>Controle de Acesso</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>
              Sistema de biometria, permitindo a identificação através da
              impressão digital.
            </li>
            <li>
              Gerenciamento on-line de catracas eletrônicas, com exibição de
              fotografias digitalizadas dos associados.
            </li>
            <li>
              Bloqueio automático dos sócios em atraso, suspensos, dependentes
              maiores, carteiras vencidas, carteiras canceladas e,
              opcionalmente, exames médicos vencidos.
            </li>
            <li>Controle de convidados.</li>
            <li>
              Impressão de carteiras, convites e ingressos com códigos de
              barras.
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="2" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiCoffee />
              </div>
              <p>Controle de Bares e Restaurantes</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>Terminal PDV para controle de vendas.</li>
            <li>Módulo de consumo pré-pago e pós-pago.</li>
            <li>
              Controle do consumo do associado dentro do restaurante ou bar
              através de comandas eletrônicas.
            </li>
            <li>
              Utilização da carteira para lançamento das despesas no
              contas-correntes.
            </li>
            <li>
              Senhas e limites de crédito estabelecidos pelo próprio associado.
            </li>
            <li>Relatórios de vendas por produto, departamento ou terminal.</li>
            <li>
              Integração com o sistema de estoque, para baixa de mercadorias.
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="3" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiDollarSign />
              </div>
              <p>Cobrança Bancária</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>Sistema de emissão de boletos com todos os bancos.</li>
            <li>Débito em conta.</li>
            <li>Envio automático de boletos via e-mail.</li>
            <li>Exportação de boletos online (Módulo WEB).</li>
            <li>Baixa automática de débitos via arquivo retorno.</li>
            <li>
              O sistema de cobrança e arrecadação permite controlar todas as
              receitas do clube, como: Mensalidades, parcelamentos de títulos,
              chamadas de capitais, escolinhas, receitas de bares e
              restaurantes, recebimentos de convites, carteirinhas, ingressos.
            </li>
            <li>
              No cálculo da cobrança, o sistema permite a diferenciação
              automática de valores por: Categoria de sócio, tipo de dependente,
              faixa etária, sexo e período de vencimento.
            </li>
            <li>
              Agenda de cobrança: Sistema de agendamento da cobrança das
              mensalidades dos sócios.
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="4" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiUserCheck />
              </div>
              <p>Controle de Academia</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>Controle de modalidade esportivas.</li>
            <li>Controle de alunos por turma.</li>
            <li>Controle de acesso do aluno na academia.</li>
            <li>Módulo de Avaliação Física.</li>
            <li>Emissão de ficha de exercícios.</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="5" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiShield />
              </div>
              <p>Segurança</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>Usuários com senha de entrada e limitação no uso e acesso do sistema.</li>
            <li>Registro do usuário, data e hora de todas as operações executadas no sistema (Sistema de LOG).</li>
            <li>Fechamento de caixa com controle de saldos, estornos, exclusões e baixas com data retroativa.</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="6" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiFileText />
              </div>
              <p>Relatórios</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>Relatórios Cadastrais.</li>
            <li>Relatórios de Cobrança.</li>
            <li>Relatórios Estatístico/Financeiros.</li>
            <li>Relatórios Estatísticos de Frequencia no Clube.</li>
            <li>Etiquetas.</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem uuid="7" className={styles.accordion__item}>
        <AccordionItemHeading className={styles.accordion__item_heading}>
          <AccordionItemButton className={styles.accordion__button}>
            <div className={styles.iconLeft}>
              <div>
                <FiMonitor />
              </div>
              <p>Sistema Web</p>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordion__panel}>
          <ul>
            <li>Emissão de boletos pelo site.</li>
            <li>Emissão de convites pelo site.</li>
            <li>Consulta de dados cadastrais pelo site.</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
