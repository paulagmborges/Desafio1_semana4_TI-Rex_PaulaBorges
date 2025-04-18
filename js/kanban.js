const columns = document.querySelectorAll('.todo-column');

columns.forEach(column => {
  new Sortable(column, {
    group: 'kanban',
    animation: 150,
    ghostClass: 'drag-ghost', 
  });
});
