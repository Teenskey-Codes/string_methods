function print(value){
 console.info(value);
}
//Javascript String Methods
//1. charAt
//Returns a character at the specified index
//If the index is undefined, it returns the first character
const char= "Hello";
print(char.charAt())
//H


//2. charCodeAt
// Returns the Unicode of the character at a specified index (position) in a string. 
//Unicode is an international character encoding standard that provides a unique number for every character across languages and scripts, making almost all characters accessible across platforms, programs, and devices.
print(char.charCodeAt(1))
//e=>101

//3. .concat
//Joins two or more strings and returns new string with all the concatenated strings
const name1 = "Martin"
const name2 = "Kamau"
print(name1.concat(" ",name2))
//Martin Kamau

//4. endsWith
//checks if a word ends with a certain character
const sentence = "Hello am just learning how to code"
print(sentence.endsWith("!"))
//false
print(sentence.endsWith("e"))
//true

//We can also limit where the search would end
//We can say: we want to search to the 16th value or whatever number we specify
print(sentence.endsWith("code",30))
//true
//To get to the word code we have spanned 30 characters including spaces

//5. fromCharCode
//Converts Unicode into human readable text
print(String.fromCharCode(73))
// I
print(String.fromCharCode('73'))
// 'I'

//6. includes
//Checks whether a string contains a specific string
const include = "This is javascript code".includes("javascript")
print(include)
//true
print("includes single strings".includes("s"))
//true

//We can also include a second parameter to to specify where we want the search to start at

print("Javascript is the best".includes("the",13))
//true

//7. indexOf 
//Returns the position of the first found occurrence of a specified value in a sting

print("Tell me at what character position I start.".indexOf("start"))
//37
print("Tell me at what character position I start.".indexOf(" "))
//4
//The space character starts at position 4

//We can input a second argument on where we want our indexOf to begin the search
print("Tell me at what character position I start.".indexOf(" ", 5))
//7
//The second space character begins at position 7

//8. lastIndexOf
//Similar to indexOf
//Finds the last index of a value
print("Tell me the position of the last index of my string".lastIndexOf("string"))
//45
//It can take a 2nd argument which is a limit 


//9. match
//Retrieves the results of a matching string against a REGEX
print("This  is how MATCH method works with REGEX".match(/[A-Z]/g /* g stands for global */))
//If we remove the g in the REGEX expression we will get the first T as the upperCase with more details on it

/*
[
 'T', 'M', 'A', 'T',
 'C', 'H', 'R', 'E',
 'G', 'E', 'X'
] 
*/

print("This  is how MATCH method works with REGEX".match(/[A-Z]/));
/*
[
  'T',
  index: 0,
  input: 'This  is how MATCH method works with REGEX',
  groups: undefined
]

*/

//10. matchAll
//Functions like match but on steroids
//It matches all of the instances we can find
//We can use a string or a REGEX to find all instances
// "Find the strings with e in their words".matchAll("e").forEach((element)=>{console.log(element)})


//10. normalize
//We can normalize a Unicode string
//That is we can take a long string of unicode values and make it into human readable format
 
print("\u0044\u0041\u0044".normalize())
//DAD

//11. padEnd
//We can padding to the end of a string

print("Hello".padEnd(10))
//In this case we will have a space of upto 10 characters on the left of Hello
//"Hello          "
//We can give it a 2nd argument of what we might want to replace the padding with
//For instance
print("Hello".padEnd(24," ----this is space"))
//Hello ----this is space

//12.padStart
print("hello".padStart(15))
//          hello

//13. padStart
print("hello".padStart(10," * "))
// *  *hello
 


