
const random = (max) => Math.floor(Math.random() * max);
const randomClock = (h, m) => {
  h = random(23)
  m = random(60)
  return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;
};

const pick = (data) => {
  return data.length ? data[random(data.length)] : random(data);
};

export const diterima = "diterima";
export const dibuat = "dibuat";
export const diantarkan = "diantarkan";

// dummy data order
export const orderList = Array(15).fill(0).map((_, i) => ({
  id: i,
  value: pick(10) || 1,
  status: pick([diterima, dibuat, diantarkan]),
  room: pick(Array(10).fill(0).map((_, n) => n + 100)),
  hour: pick(Array(10).fill(0).map(() => randomClock())),
  modifier: [
    "Pedas",
    "Pedas Gila",
    "Tidak Pedas",
    "Panas",
    "Dingin",
    "Extra Ayam",
  ].slice(pick(6),pick(6)),
  notes: pick([
    "Jangan Pakai Sayur ya", 
    "Goreng yang crispy ya Goreng yang crispy ya Goreng yang crispy ya", 
    ""
  ]),
  name: pick([
    "Nasi Goreng",
    "Ayam Goreng",
    "Nasi Uduk Ayam Geprek Pedas",
    "Martabak Mesir Original",
    "Mie Goreng",
    "Seblak",
    "Bakso",
    "Pizza",
    "Ramen",
  ]),
}));

export const orderListCount = orderList.reduce((r, v) => (r[v.status]++, r), {
  [diterima]: 0,
  [dibuat]: 0,
  [diantarkan]: 0,
});
