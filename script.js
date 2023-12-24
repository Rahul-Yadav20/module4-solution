arry = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (let index = 0; index < arry.length; index++) {
        let firstLetter = arry[index].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            greetBye.sayBye(arry[index]);
        }
        else{
            greetHello.sayHello(arry[index]);
        }
}
