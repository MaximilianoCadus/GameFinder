const getGenre = (list) => {
  return list.map((g) => g.name).join(', ');
};

const formatDate = (string) => {
  const d = new Date(string);
  return d.toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const getPlatforms = (list) => {
  return list.map((p) => p.platform.name).join(', ');
};

const getPublishers = (list) => {
  return list.map((p) => p.name).join(', ');
};

const getDevelopers = (list) => {
  return list.map((d) => d.name).join(', ');
};

export { getGenre, formatDate, getPlatforms, getPublishers, getDevelopers };
