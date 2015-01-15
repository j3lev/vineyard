$.getJSON('scripts/inventory.json', function(response) {
	
	for (i = 0; i < response.length; i++) {
		
		//SETS COLUMN SIZE
		wine_col = document.createElement("div");
		wine_col.className = "col-xs-12 col-md-6 col-lg-4";
		wine_col.id = "wine" + i;
		document.getElementById("wines-list").appendChild(wine_col);

		var wine_panel = document.createElement("div");
		
		//DETERMINES PANEL COLOR ACCORDING TO WINE COLOR JSON PROPERTY
		if (response[i].Color.toLowerCase() == "white") wine_panel.className = "panel panel-warning";
		else wine_panel.className = "panel panel-danger";
				
		document.getElementById(wine_col.id).appendChild(wine_panel);
		var wine_title_container = document.createElement("div");
		var wine_name = document.createElement("span");
		var clearfix = document.createElement("div");
		var wine_name_text = document.createElement("span");
		wine_name_text.innerText = response[i].Name;
		wine_title_container.className = "panel-heading";
		wine_name.id = wine_col.id + "-Name";
		clearfix.className = "clearfix";
		clearfix.innerText = " ";
		
		var edit_btn = document.createElement("button");
		edit_btn.className = "btn btn-default glyphicon glyphicon-edit pull-right edit-btn";
		edit_btn.type = "button";
		edit_btn.setAttribute("data-toggle", "modal");
		edit_btn.setAttribute("data-target", "#edit-modal");
		
		wine_name.appendChild(wine_name_text);
		wine_title_container.appendChild(edit_btn);
		wine_title_container.appendChild(wine_name);
		wine_title_container.appendChild(clearfix);
		
		wine_panel.appendChild(wine_title_container);

		edit_btn.addEventListener("click", function(){
			wine_id = this.parentNode.parentNode.parentNode.id; //gets current wine ID from great grandparents
			id_index = wine_id[4];
			//CLEARS EXISTING FORM DATA
			$("#edit-form-container").empty();
			//GENERATES FORM IN MODAL ON EDIT BUTTON CLICK
			for (attribute in response[id_index]) {
				var form_field = document.createElement("input");
				var form_field_container = document.createElement("div");
				var field_label = document.createElement("label");
				field_label.innerText = attribute;
				form_field_container.appendChild(field_label);
				form_field.className = "form-control field";
				form_field.type = "text";
				form_field.id = wine_id + "-input-" + attribute;
				form_field.value = response[id_index][attribute];
				form_field_container.className = "form-group col-xs-12";
				form_field_container.appendChild(form_field);
				document.querySelector("#edit-form-container").appendChild(form_field_container);
			}

		});
		
		for (var attribute in response[i]) {
			

			if (attribute == "Color" || attribute == "Name") continue;

			var container = document.createElement("div");
			container.className = "list-group-item";
			
			var heading = document.createElement("h4");
			heading.className = "list-group-item-heading";
			
			heading_text = document.createTextNode(attribute);
			heading.appendChild(heading_text);
			attr_val = document.createElement("span");
			attr_val.id = wine_col.id + "-" + attribute;
			attr_val.innerText = response[i][attribute];
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
			else container.appendChild(attr_val);
			document.getElementById(wine_col.id).getElementsByClassName("panel")[0].appendChild(container);
		}
	}
	
	function wineUpdate(wine_id) {
		var container = document.getElementById(wine_id + "-title").childNodes[0];
		index = wine_id[4];
		//response[index].Name = "Tweezer";
		//container.nodeValue = response[index].Name;
	}

	document.querySelector("#edit-submit").addEventListener("click", function() {
		fields = document.getElementsByClassName("field");
		
		for (var i = 0; i < fields.length; i++ ) {
			var panel_field = document.getElementsByClassName("field")[i];
			var attribute = panel_field.id.substr(12);
			var wineID = panel_field.id.substr(0, 5);
			var wineIDint = parseInt(wineID[4]);
			if (attribute == "Color" || attribute == "Characteristics") continue;
			response[wineIDint][attribute] = fields[i].value;
			document.querySelector("#" + wineID + "-" + attribute).innerText = fields[i].value;
		}
	
	});		

});
