wine_index = 0;
wine_name = "Test Wine";
wine_desc = "This is a sample description of the wine";

var wine_col = document.createElement("div");
wine_col.className = "col-xs-12 col-sm-6 col-lg-4";
wine_col.id = "wine" + wine_index;
document.getElementById("wines-list").appendChild(wine_col);

var wine_panel = document.createElement("div");
wine_panel.className = "panel panel-primary";
document.getElementById("wine" + wine_index).appendChild(wine_panel);

var wine_title = document.createElement("div");
wine_title.className = "panel-heading";
wine_name = document.createTextNode(wine_name);
wine_title.appendChild(wine_name);
document.getElementById("wine" + wine_index).getElementsByClassName("panel")[0].appendChild(wine_title);

var desc = document.createElement("div");
desc.className = "panel-body";
wine_desc = document.createTextNode(wine_desc);
desc.appendChild(wine_desc);
document.getElementById("wine" + wine_index).getElementsByClassName("panel")[0].appendChild(desc);

