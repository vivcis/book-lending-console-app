    function User(name)
    {
    	this.name = name
    	this.type = "User"
    }

    function Librarian(name)
    {
    	this.name = name
    	this.type = "Librarian"
    }
   
   function Library()
   {
   	this.create = (name, type) => {
   		switch(type)
   		{
   			case 1:
   			return new User(name)
   			break;
   			case 2:
   			return new Librarian(name)
   			break;
   		}
   	}
   }
  function say()
  {
  	console.log("Hello, my name is " + this.name + " and I am a " + this.type)
  }

   const library = new Library()
   const employees = []

   employees.push(library.create("Cecilia", 1))
   employees.push(library.create("Olanma", 2))
   employees.push(library.create("Jude", 2))
   employees.push(library.create("Chidera", 1))

   employees.forEach( emp => (
     say.call(emp)
   	))

   // using the singleton method
   // to limit the number of instances of an object to 0 or 1 in this case to view borrowed books
function Process(state)
{
	this.state = state
}

const borrowedBooks = (function(){
	function Librarian()
	{
		this.numProcess = 0
	}

	let pManager

	function createLibrarian()
	{
		pManager = new Librarian()
		return pManager
	}

	return{
		getLibrarian:() => {
			if(!pManager)
				pManager = createLibrarian()
			return pManager
		}
	}
})()

const Librarian = borrowedBooks.getLibrarian();
const Librarian2 = borrowedBooks.getLibrarian();

console.log(Librarian === Librarian2)

    // to review all the books in the Library
const books = ["half of a yellow sun", "when tomorrow comes", "tomorrow with you"];

function Iterator(books)
{
	// iterating books from front to back
	this.books = books
	this.index = 0
}

Iterator.prototype = {
	hasNext: function()
{
   return this.index < this.books.length
},
next: function()
{
	return this.books[this.index++]
 }
}

const iter = new Iterator(books)
// console.log(iter.next())
// console.log(iter.next())
while (iter.hasNext())
console.log(iter.next())
