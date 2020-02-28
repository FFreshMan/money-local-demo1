let id: number = parseInt(window.localStorage.getItem('_id') || '4') || 4;

function createId() {
  id++;
  window.localStorage.setItem('_id', id.toString());
  return id;

}

export default createId;