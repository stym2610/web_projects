//  let array = [
//     { name : "Beginner"},
//     { name : "Intermediate"},
//     { name : "Advanced"}
// ];

// array.filter(x => x.name != "Advanced").forEach(x => x.name = "newName");
// console.log(array);

let array = [
    {
      id : 1,
      bool : true  
    },
    {
        id : 2,
        bool : true  
    }
];

array = array.map(e => {
    e.bool = true;
})
 console.log(array);
