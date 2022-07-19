const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Spend per day",
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      borderColor: "rgb(255, 99, 132)",
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      borderRadius: 3,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};
const myChart = new Chart(document.getElementById("canva"), config);
