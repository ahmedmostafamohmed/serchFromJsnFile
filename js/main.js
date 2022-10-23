let locationcity = document.getElementById("location"),
    results = document.getElementById("demo"),
    temp = document.getElementById("demo"),
    searchInput = document.getElementById("FindLocation"),
    searchValue,
    myHttp,
    myResponse,
    myData,
    x,
    dataOfList = [];
async function getData() {
    myHttp = await fetch(`poi.geojson`);
    myResponse = await myHttp.json();
    myData = myResponse.features
    // console.log(myData.features);
    dataOfList = myData;
    // displayData();
}
getData()

function displayData() {
    // to display Data
    temp = ''
    for (var i = 0; i < dataOfList.length; i++) {
        // console.log(dataOfList[i].properties.name_engli);
        temp += `
        <tr>
        <td>${dataOfList[i].properties.name_arabi}</td>
        <td>${dataOfList[i].properties.name_engli}</td>
        <td>${dataOfList[i].properties.alt_name_a}</td>
        <td>${dataOfList[i].properties.alt_name_en}</td>
        <td>${dataOfList[i].properties.keyword_ar}</td>
        <td>${dataOfList[i].properties.keyword_en}</td>
        </tr> 
        
        `
    }
    results.innerHTML = temp;
}


searchInput.addEventListener("keyup", function () {

    searchValue = searchInput.value.toLowerCase();
    temp = "";
    for (var i = 0; i < dataOfList.length; i++) {
        x = dataOfList[i].properties.name_engli
        if (x.toLowerCase().includes(searchValue) == true
            || dataOfList[i].properties.name_arabi.toLowerCase().includes(searchValue) == true
        ) {

            temp += `
        <tr>
        <td>${dataOfList[i].properties.name_arabi}</td>
        <td>${x}</td>
        <td>${dataOfList[i].properties.alt_name_a}</td>
        <td>${dataOfList[i].properties.alt_name_en}</td>
        <td>${dataOfList[i].properties.keyword_ar}</td>
        <td>${dataOfList[i].properties.keyword_en}</td>
        </tr> 

        `
        }
    }
    results.innerHTML = temp;
    // console.log(temp);
})