//Module pattern
//task 6
function itemMethods() {
    let items = [];
    return {
        add: function (item) {
            items.push(item);

        },
        remove: function (item){
            const index = items.indexOf(item);
            items.splice(index,1);
        },
        list: function () {
            console.log(items);
        }

    };
}

let weapons = itemMethods();
weapons.add("sherif");
weapons.add("spectre");
weapons.add("vandal");
weapons.list();

weapons.remove("spectre");
weapons.list();