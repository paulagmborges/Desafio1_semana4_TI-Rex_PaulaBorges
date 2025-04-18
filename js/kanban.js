// Seleciona todas as colunas
const columns = document.querySelectorAll('.todo-column');

columns.forEach(column => {
  new Sortable(column, {
    group: 'kanban',
    animation: 150,
    ghostClass: 'drag-ghost', // Classe adicionada temporariamente ao card que está sendo arrastado
  });
});
