export const getNewsDetail = async (id) => {
  const storageItem = localStorage.getItem(`news:${id}`);
  if (storageItem) {
    return JSON.parse(storageItem);
  }

  return undefined;
};

export const setNewsDetail = async (news) => localStorage.setItem(`news:${news.id}`, JSON.stringify(news));
