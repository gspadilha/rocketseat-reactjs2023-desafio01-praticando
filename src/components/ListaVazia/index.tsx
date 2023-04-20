import style from './style.module.css';

export function ListaVazia() {
  return (
    <section data-testid='lista_vazia' className={style.wrapperListaVazia}>
      <img src='./src/assets/images/clipboard.png' />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarifas e organize seus itens a fazer</span>
    </section>
  );
}
