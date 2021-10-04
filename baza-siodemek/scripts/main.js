const dataShuffle = (() => {
    const table = document.getElementById('table_content');

    const loadFunction = (array) => {
        table.innerHTML = "";

        const rows = array.length;
        const cols = 7;

        for(i = 0; i < rows; i++){
            let row = document.createElement('tr');

            if(i % 2 !== 0) { row.classList.add('contrasting'); }
            else { row.classList.add('light'); }

            Object.values(array[i]).forEach(item => {
                let data = document.createElement('td');
                data.innerText = item;
                row.appendChild(data);
            })

            table.appendChild(row);
        }
    }

    loadFunction(data);

    const searchData = () => {
        let user_input = document.getElementById('search').value;
        let select = document.getElementById('railway');
        let results = [];

        data.forEach(item => {
            Object.values(item).forEach(entry => {
                if(results.includes(item)) {return};
                if(entry.toLowerCase().includes(user_input.toLowerCase())) { return results.push(item) };
                if((item.series.toLowerCase() + "-" + item.number).includes(user_input.toLowerCase())) { return results.push(item) };
            })
        })
        select.getElementsByTagName('option')[0].selected = "selected";
        loadFunction(results);
    }
    
    const fillSelect = (() => {
        let select = document.getElementById('railway');
        let railways = [];
        for(i = 0; i < data.length; i++){
            if(railways.includes(data[i].railway)) {}
            else{railways.push(data[i].railway)};
        }
        railways.forEach(item => {
            let option = document.createElement('option');
            option.innerText = item;
            option.value = item;
            select.appendChild(option);
        })
    })();

    const sortByRailway = () => {
        let user_input = document.getElementById('railway').value;
        let results = [];

        data.forEach(item => {
            Object.values(item).forEach(entry => {
                if(results.includes(item)) {return};
                if(item.railway === user_input) { return results.push(item) }
            })
        })

        if(results.length === 0) { return loadFunction(data)};
        loadFunction(results);
    } 

    return {
        search: searchData,
        sort: sortByRailway
    }

})();