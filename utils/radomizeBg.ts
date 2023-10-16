export const randomizeBg = () => {
  const bg = [
    "/searchbg1.jpg",
    "/searchbg2.jpg",
    "/searchbg3.jpg",
    "/searchbg4.jpg",
  ];
  let index = Math.floor(Math.random() * bg.length);

  return bg[index];
};
