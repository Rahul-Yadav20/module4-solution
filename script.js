// Array with names
let names = ["yoyo", "James", "alex", "joy", "loya", "joe", "Johny"];

// for loop work till the array length 
// In above example, array length is 7 
for (let index = 0; index < names.length; index++) {
    
    // names array have person's names as String
    // There is a method is String that is charAt 
    // charAt() give a character at a perticular index
    // charAt(0) means first letter or character of string
    if(names[index].charAt(0)==="j" || names[index].charAt(0)==="J"){
        console.log("Goodbye " + names[index]);
    }
    else{
        console.log("Hello " + names[index]);
    }
    
}