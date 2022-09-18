const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const hasil = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);
    const hasilFilter = hasil.flat().filter((item) => item.hasil === emosi);
    return hasilFilter.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
