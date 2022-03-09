const Cars = await fetch("./Data/Cars.json");
const data = await Cars.json();
export default await data