let json = [
    {
        "name": "name_1",
        "age": "23"
    },
    {
        "name": "name_2",
        "age": "28"
    }
];

let personas = json.filter(icon => icon.name == "name_1");
console.log(personas[0]); 