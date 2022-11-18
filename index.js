//pie
  var ctxP = document.getElementById("pieChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["Các lỗi vi phạm khác", "Chạy quá tốc độ", "Đi không đúng làn đường, phần đường", "Vượt xe sai quy định", "Chuyển hướng không đúng quy định", "Không đúng quy định", "Sử dụng rượu bia và các chất kích thích"],
      datasets: [{
        data: [136.8, 32.4, 93.6, 25.2, 32.4, 25.2, 14.4],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", '#FF5A5E', "#5AD3D1"],
        hoverBackgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", '#FF5A5E', "#5AD3D1"]
      }]
    },
    options: {
      responsive: true
    }
  });