function selectContent(){
    const body = document.getElementsByTagName('body')[0];
    const select = document.getElementById("dataset-select");
    
    if(select.value == "odiac-ffco2-monthgrid-v2023-odiac2023_1km_excl_intl_202212"){
        body.style.backgroundImage = 'url(img/map1.png)';
        loadMap("https://earth.gov/ghgcenter/api/raster/collections/odiac-ffco2-monthgrid-v2023/items/odiac-ffco2-monthgrid-v2023-odiac2023_1km_excl_intl_202212/map?assets=co2-emissions&rescale=-10%2C60&colormap_name=jet")
    }else if(select.value == "sedac-popdensity-yeargrid5yr-v4.11-2020"){
        body.style.backgroundImage = 'url(img/map2.png)';
        loadMap("https://earth.gov/ghgcenter/api/raster/collections/sedac-popdensity-yeargrid5yr-v4.11/items/sedac-popdensity-yeargrid5yr-v4.11-2020/map?assets=population-density&nodata=-3.402823e%2B38&rescale=0%2C1000&colormap_name=ylorrd")
    }else if(select.value == "eccodarwin-co2flux-monthgrid-v5-202212"){
        body.style.backgroundImage = 'url(img/map3.png)';
        loadMap("https://earth.gov/ghgcenter/api/raster/collections/eccodarwin-co2flux-monthgrid-v5/items/eccodarwin-co2flux-monthgrid-v5-202212/map?assets=co2&nodata=nan&rescale=-0.0007%2C0.0002&colormap_name=bwr")
    }else if(select.value == "gosat-based-ch4budget-yeargrid-v1-2019"){
        body.style.backgroundImage = 'url(img/map4.png)';
        loadMap("https://earth.gov/ghgcenter/api/raster/collections/gosat-based-ch4budget-yeargrid-v1/items/gosat-based-ch4budget-yeargrid-v1-2019/map?assets=post-total&nodata=9.96921e%2B36&rescale=0%2C0.3&colormap_name=spectral_r")
    }
}

function loadMap(url){
    // // Define iframe with lazy loading
    // const iframe = document.createElement("iframe");
    // iframe.src = url;
    // iframe.width = "100%";
    // iframe.height = "100%";
    // iframe.loading = "lazy";
    // iframe.onload = function() {
    //     console.log(map)
    // };

    // // Add to div element with class named frameDiv
    // const frameDiv = document.getElementById("iframe-container");
    // frameDiv.innerHTML.innerHTML = "";
    // frameDiv.append(iframe);

    const iframe = document.getElementById("nasa-iframe");
    iframe.src = url;
}

// // Inicializa el mapa
// var map = L.map('map').setView([0, 0], 2);

// // Añadir capa de mapa base
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19
// }).addTo(map);

// map.setZoom(4)

//Función para cargar puntos desde el backend
function loadPoints() {
    const select = document.getElementById("dataset-select")
    fetch('https://earth.gov/ghgcenter/api/stac')
        .then(response => response.json())
        .then(data => {
            const result = data.links.filter(d => d.rel == "child");
            result.forEach(function(item) {
                console.log(item.title)
            });
            //L.geoJSON(data).addTo(map);
        });
}

loadPoints();