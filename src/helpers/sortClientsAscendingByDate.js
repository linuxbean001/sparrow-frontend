const sortClientsAscendingByDate = clients => {
  return clients.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
};

export default sortClientsAscendingByDate;
