$.getJSON('scripts/inventory.json', function(response) {
	for (var i = 0; i < response.length; i++) {
		var wine_col = document.createElement("div");
		wine_col.className = "col-xs-12 col-sm-6 col-lg-4";
		wine_col.id = "wine" + i;
		document.getElementById("wines-list").appendChild(wine_col);

		var wine_panel = document.createElement("div");
		if (response[i].color.toLowerCase() == "white") {
			wine_panel.className = "panel panel-warning";
		}
		else {
			wine_panel.className = "panel panel-danger";
		}
		document.getElementById("wine" + i).appendChild(wine_panel);

		var wine_title = document.createElement("div");
		wine_title.className = "panel-heading";
		wine_name = document.createTextNode(response[i].name);
		wine_title.appendChild(wine_name);
		document.getElementById("wine" + i).getElementsByClassName("panel")[0].appendChild(wine_title);

		var desc = document.createElement("div");
		desc.className = "panel-body";
		wine_desc = document.createTextNode(response[i].color);
		desc.appendChild(wine_desc);
		document.getElementById("wine" + i).getElementsByClassName("panel")[0].appendChild(desc);
	}
});

