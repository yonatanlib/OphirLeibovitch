type Image = {
  url: string;
  link: string;
  order: number;
};

function importAll(r: __WebpackModuleApi.RequireContext) {
  const images: Record<string, string> = {};
  r.keys().forEach((key) => (images[key.replace("./", "")] = r(key)));
  return images;
}

export const getWorksImages = async () => {
  const images = importAll(
    require.context("../assets/Extras", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(images);
};
