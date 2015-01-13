$.getJSON('scripts/inventory.json', function(response) {
	for (i = 0; i < response.length; i++) {
		
		var wine_col = document.createElement("div");
		wine_col.className = "col-xs-12 col-sm-6 col-lg-4";
		wine_col.id = "wine" + i;
		document.getElementById("wines-list").appendChild(wine_col);

		var wine_panel = document.createElement("div");
		if (response[i].Color.toLowerCase() == "white") {
			wine_panel.className = "panel panel-warning";
		}
		else {
			wine_panel.className = "panel panel-danger";
		}

				
		document.getElementById("wine" + i).appendChild(wine_panel);

		var wine_title_container = document.createElement("div");
		wine_title_container.className = "panel-heading";
		text = document.createTextNode(response[i].Name);
		wine_title_container.appendChild(text);
		document.getElementById("wine" + i).getElementsByClassName("panel")[0].appendChild(wine_title_container);

		for (var attribute in response[i]) {
			if (attribute == "Color" || attribute == "Name") continue;
			var container = document.createElement("div");
			container.className = "list-group-item";
			var heading = document.createElement("h4");
			heading.className = "list-group-item-heading";
			heading_text = document.createTextNode(attribute);
			heading.appendChild(heading_text);
			text = document.createTextNode(response[i][attribute]);
			container.appendChild(heading);
			if (attribute == "Characteristics") {
				for (var characteristic in response[i][attribute]) {
					var val = response[i][attribute][characteristic];
					var bar_container = document.createElement("div");
					bar_container.className = "progress";
					var bar = document.createElement("div");
					bar.className = "progress-bar progress-bar-info";
					bar.style.width = String(val) + "%";
					var bar_text = document.createTextNode(characteristic);
					bar.appendChild(bar_text);
					bar_container.appendChild(bar);
					container.appendChild(bar_container);
				}
			}
			else container.appendChild(text);
			document.getElementById("wine" + i).getElementsByClassName("panel")[0].appendChild(container);
		}
	}
});


