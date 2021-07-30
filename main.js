canvas = document.getElementById("MyCanvas");
gtx = canvas.getContext("2d");


gtx.beginPath();
gtx.strokeStyle = "red";
gtx.lineWidth = 1;
gtx.rect(150 , 143 , 430 , 200);
gtx.stroke();


gtx.beginPath();
gtx.strokeStyle = "blue";
gtx.lineWidth = 5;
gtx.arc(250, 210, 40, 0, 2*Math.PI);
gtx.stroke();

gtx.beginPath();
gtx.strokeStyle = "yellow";
gtx.lineWidth = 5;
gtx.arc(300, 250, 40, 0, 2*Math.PI);
gtx.stroke();

gtx.beginPath();
gtx.strokeStyle = "black";
gtx.lineWidth = 5;
gtx.arc(350, 210, 40, 0, 2*Math.PI);
gtx.stroke();

gtx.beginPath();
gtx.strokeStyle = "green";
gtx.lineWidth = 5;
gtx.arc(400, 250, 40, 0, 2*Math.PI);
gtx.stroke();

gtx.beginPath();
gtx.strokeStyle = "bredlue";
gtx.lineWidth = 5;
gtx.arc(450, 210, 40, 0, 2*Math.PI);
gtx.stroke();