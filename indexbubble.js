
//alert("lol outsideside bubble va");
d3.json('bubble.json', function(bubble_data) {
//alert("lol inside bubble va");
document.getElementById("test1").innerHTML= parent.document.getElementById("disease1").innerHTML;
  console.log(bubble_data);
  //alert(parent.document.getElementById("disease1").innerHTML + "kutta");
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: bubble_data[parent.document.getElementById("disease1").innerHTML],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      // {
      //   name: "central-click",
      //   options: {
      //     text: "(See more detail)",
      //     style: {
      //       "font-size": "12px",
      //       "font-style": "italic",
      //       "font-family": "Source Sans Pro, sans-serif",
      //       //"font-weight": "700",
      //       "text-anchor": "middle",
      //       "fill": "black"
      //     },
      //     attr: {dy: "65px"}
      //   }
      // },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});