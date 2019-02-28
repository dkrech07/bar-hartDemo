var data = [16, 68, 20, 30, 54];

// получаем указатель на холст
var canvas = document.getElementById('canvas');

// получаем указатель на контекст рисования
var c = canvas.getContext('2d');

// рисуем
c.fillStyle = "gray";
c.fillRect(0, 0, 500, 500);

// рисуем данные
c.fillStyle = "blue";
for (var i = 0; i < data.length; i++) {
  var dp = data[i];
  c.fillRect(25 + i * 100, 500 - dp * 5 - 30, 50, dp * 5);
}