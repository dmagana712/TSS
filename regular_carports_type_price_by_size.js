function cpFunction() {

                /* These are variables for the carport types and styles */
    var carport_style = document.getElementById("style_of_carport").value;
    var carport_type = document.getElementById("type_of_carport").value;
    var cp_length = document.getElementById("obj_length").value;
    var cp_width = document.getElementById("obj_width").value;

                /* These are if-statements for the carport types and styles */

  if (cp_width === "0" && cp_length === "12" || cp_length === "18" || cp_length === "20" || cp_length === "22" || cp_length === "24" && carport_type === "0" || carport_type === "1" || carport_type === "2" || carport_type === "3" && carport_style === "0" || carport_style === "1" || carport_style === "2" || carport_style === "3") {
    cp_price = "0";
  }

  if (carport_type === "1") {

    if (carport_style === "1") {

          if (cp_length === "12" && cp_width === "21" ) {
            cp_price = "995";
          }

          if (cp_length === "12" && cp_width === "26" ) {
            cp_price = "1195";
          }

          if (cp_length === "12" && cp_width === "31") {
            cp_price = "1445";
          }

          if (cp_length === "12" && cp_width === "36") {
            cp_price = "1695";
          }

          if (cp_length === "12" && cp_width === "41") {
            cp_price = "1845";
          }

          if (cp_length === "18" && cp_width === "21" ) {
            cp_price = "1195";
          }

          if (cp_length === "18" && cp_width === "26" ) {
            cp_price = "1345";
          }

          if (cp_length === "18" && cp_width === "31") {
            cp_price = "1595";
          }

          if (cp_length === "18" && cp_width === "36") {
            cp_price = "1845";
          }

          if (cp_length === "18" && cp_width === "41") {
            cp_price = "2095";
          }

          if (cp_length === "20" && cp_width === "21") {
            cp_price = "1445";
          }

          if (cp_length === "20" && cp_width === "26") {
            cp_price = "1595";
          }

          if (cp_length === "20" && cp_width === "31") {
            cp_price = "1945";
          }

          if (cp_length === "20" && cp_width === "36") {
            cp_price = "2295";
          }

          if (cp_length === "20" && cp_width === "41") {
            cp_price = "2545";
          }

          if (cp_length === "22" && cp_width === "21") {
            cp_price = "1595";
          }

          if (cp_length === "22" && cp_width === "26") {
            cp_price = "1945";
          }

          if (cp_length === "22" && cp_width === "31") {
            cp_price = "2295";
          }

          if (cp_length === "22" && cp_width === "36") {
            cp_price = "2645";
          }

          if (cp_length === "22" && cp_width === "41") {
            cp_price = "2995";
          }

          if (cp_length === "24" && cp_width === "21") {
            cp_price = "1695";
          }

          if (cp_length === "24" && cp_width === "26") {
            cp_price = "2045";
          }

          if (cp_length === "24" && cp_width === "31") {
            cp_price = "2495";
          }

          if (cp_length === "24" && cp_width === "36") {
            cp_price = "2845";
          }

          if (cp_length === "24" && cp_width === "41") {
            cp_price = "3245";
          }


    }

    if (carport_style === "2") {

          if (cp_length === "12" && cp_width === "21" ) {
            cp_price = "1095";
          }

          if (cp_length === "12" && cp_width === "26") {
            cp_price = "1295";
          }

          if (cp_length === "12" && cp_width === "31") {
            cp_price = "1545";
          }

          if (cp_length === "12" && cp_width === "36") {
            cp_price = "1795";
          }

          if (cp_length === "12" && cp_width === "41") {
            cp_price = "2095";
          }

          if (cp_length === "18" && cp_width === "21") {
            cp_price = "1295";
          }

          if (cp_length === "18" && cp_width === "26" ) {
            cp_price = "1445";
          }

          if (cp_length === "18" && cp_width === "31") {
            cp_price = "1795";
          }

          if (cp_length === "18" && cp_width === "36") {
            cp_price = "2045";
          }

          if (cp_length === "18" && cp_width === "41") {
            cp_price = "2295";
          }

          if (cp_length === "20" && cp_width === "21") {
            cp_price = "1545";
          }

          if (cp_length === "20" && cp_width === "26") {
            cp_price = "1695";
          }

          if (cp_length === "20" && cp_width === "31") {
            cp_price = "2045";
          }

          if (cp_length === "20" && cp_width === "36") {
            cp_price = "2395";
          }

          if (cp_length === "20" && cp_width === "41") {
            cp_price = "2795";
          }

          if (cp_length === "22" && cp_width === "21") {
            cp_price = "1695";
          }

          if (cp_length === "22" && cp_width === "26") {
            cp_price = "2045";
          }

          if (cp_length === "22" && cp_width === "31") {
            cp_price = "2395";
          }

          if (cp_length === "22" && cp_width === "36") {
            cp_price = "2745";
          }

          if (cp_length === "22" && cp_width === "41") {
            cp_price = "3245";
          }

          if (cp_length === "24" && cp_width === "21") {
            cp_price = "1895";
          }

          if (cp_length === "24" && cp_width === "26") {
            cp_price = "2345";
          }

          if (cp_length === "24" && cp_width === "31") {
            cp_price = "2695";
          }

          if (cp_length === "24" && cp_width === "36") {
            cp_price = "3145";
          }

          if (cp_length === "24" && cp_width === "41") {
            cp_price = "3695";
          }

    }

    if (carport_style === "3") {

          if (cp_length === "12" && cp_width === "21") {
            cp_price = "1295";
          }

          if (cp_length === "12" && cp_width === "26") {
            cp_price = "1695";
          }

          if (cp_length === "12" && cp_width === "31") {
            cp_price = "2045";
          }

          if (cp_length === "12" && cp_width === "36") {
            cp_price = "2395";
          }

          if (cp_length === "12" && cp_width === "41") {
            cp_price = "2745";
          }

          if (cp_length === "18" && cp_width === "21") {
            cp_price = "1495";
          }

          if (cp_length === "18" && cp_width === "26") {
            cp_price = "1845";
          }

          if (cp_length === "18" && cp_width === "31") {
            cp_price = "2195";
          }

          if (cp_length === "18" && cp_width === "36") {
            cp_price = "2545";
          }

          if (cp_length === "18" && cp_width === "41") {
            cp_price = "2995";
          }

          if (cp_length === "20" && cp_width === "21") {
            cp_price = "1745";
          }

          if (cp_length === "20" && cp_width === "26") {
            cp_price = "2095";
          }

          if (cp_length === "20" && cp_width === "31") {
            cp_price = "2395";
          }

          if (cp_length === "20" && cp_width === "36") {
            cp_price = "2845";
          }

          if (cp_length === "20" && cp_width === '41') {
            cp_price = "3195";
          }

          if (cp_length === "22" && cp_width === "21") {
            cp_price = "1995";
          }

          if (cp_length === "22" && cp_width === "26") {
            cp_price = "2445";
          }

          if (cp_length === "22" && cp_width === "31") {
            cp_price = "2895";
          }

          if (cp_length === "22" && cp_width === "36") {
            cp_price = "3345";
          }

          if (cp_length === "22" && cp_width === "41") {
            cp_price = "3895";
          }

          if (cp_length === "24" && cp_width === "21") {
            cp_price = "2095";
          }

          if (cp_length === "24" && cp_width === "26") {
            cp_price = "2545";
          }

          if (cp_length === "24" && cp_width === "31") {
            cp_price = "3095";
          }

          if (cp_length === "24" && cp_width === "36") {
            cp_price = "3545";
          }

          if (cp_length === "24" && cp_width === "41") {
            cp_price = "4095";
          }
    }

  }
                /* These are the final pricing variables and display code */

    var cp_price = cp_price;

    document.getElementById("demo1").innerHTML = cp_price;

  
  
  
  
    /* These are variables for the Wind/Snow rating package dimensions */

  var ws_length = document.getElementById("ws_length").value;
  var ws_height = document.geElementById("ws_height").value;
  var ws_check = document.getElementById("ws_check").value;

  if (ws_check === "0" || ws_check ==="2") {
    ws_price = "175"
  }

  if (ws_check === "1"); {

    if (ws_length === "21" && ws_height === "1") {
      ws_price = "175";
    }
      
    if (ws_length === "21" && ws_height === "2") {
      ws_price = "235";
    }
      
    if (ws_length === "21" && ws_height === "3") {
      ws_price = "Incl.";
    }
      
    if (ws_length === "26" && ws_height === "1") {
      ws_price = "250";
    }
      
    if (ws_length === "26" && ws_height === "2") {
      ws_price = "320";
    }
      
    if (ws_length === "26" && ws_height === "3") {
      ws_price = "Incl.";
    }
      
    if (ws_length === "31" && ws_height === "1") {
      ws_price = "275";
    }
      
    if (ws_length === "31" && ws_height === "2") {
      ws_price = "355";
    }
      
    if (ws_length === "31" && ws_height === "3") {
            ws_price = "Incl.";
    }
      
    if (ws_length === "36" && ws_height === "1") {
            ws_price = "350";
    }
      
    if (ws_length === "36" && ws_height === "2") {
            ws_price = "440";
    }
      
    if (ws_length === "36" && ws_height === "3") {
            ws_price = "Incl.";
    }
      
    if (ws_length === "41" && ws_height === "1") {
            ws_price = "375";
    }
      
    if (ws_length === "41" && ws_height === "2") {
            ws_price = "475";
    }
      
    if (ws_length === "41" && ws_height === "3") {
            ws_price = "Incl.";
    }
  }

  var ws_price = ws_price;
  
  document.getElementById("demo2").innerHTML = ws_price;

}