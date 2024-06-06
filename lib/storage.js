let clients = [];

export const addClient = (client) => {
  clients.push(client);
};

export const getClients = () => {
  return clients;
};
