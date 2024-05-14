const information = document.getElementById('info');

if (information) {
  information.innerText = `This app is using Chrome (v${window.appApi.chrome()}), Node.js (v${window.appApi.node()}), and Electron (v${window.appApi.electron()})`;
}

const loadUsers = async () => {
  const user=await window.ipcRenderer.invoke('user');
  const resp = document.getElementById('resp');
  if (resp) {
    resp.innerText = JSON.stringify(user, null, 2);
  }
}

loadUsers();

const addUser = async () => {
  let user={name:"New User"}
  user=await window.ipcRenderer.invoke('user-create',user);
  const resp = document.getElementById('resp');
  if (resp) {
    resp.innerText = JSON.stringify(user, null, 2);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('add-user');
  if (btn) {
    btn.addEventListener('click', addUser);
  }
});
