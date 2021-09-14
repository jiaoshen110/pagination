const paginate = (followers) => {
  const itemsPerpage = 10;
  const pages = Math.ceil(followers.length / itemsPerpage);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerpage;
    return followers.slice(start, start + itemsPerpage);
  });
  return newFollowers;
};

export default paginate;
