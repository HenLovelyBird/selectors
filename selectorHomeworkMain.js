        //JS Exercises
        //EX11) Write a function to add a new link into the navbar
        //EX12) Write a function to remove the Search Looking class item
        //EX13) Write a function to change the background of the jumbotron
        //EX14) Write a function to change the color of the main title
        //EX15) Write a function to change the column size for post headings
        //EX16) Write a function to remove all the links under "Elsewhere"
        //EX17) Write a function to trim just the first 150 characters for each blog post
        //EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        //EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        //EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name


function _$(selector){    //in this shortcut, did you write _$ because otherwise the function would call something in jQuery or why did you have to use the underscore?
    return document.querySelector(selctor)
}

function _$$(selector) {
    return document.querySelectorAll(selector)
}

function _$c(selector){ //cannot remember is the syntax of the fuction is correct?
    return document.createElement(selector)
}

//EX1) Write a selector to target the main title of the page//
function changeTitle (){ //function is named what i want to do
    _$(h1) //i want to use this shortcut to select the main title (h1)
    = ''//do i have to empty it between selecting it and changing it? 
    //here i want to change that title
    _$(h1).innerHTML = ('Hey, I'm a new title') 
}

//EX11) Write a function to add a new link into the navbar
function addNewLink (){
    var navbar = _$c(navbar)
    navbar.textContent = "www.stratofyzika.com"
}

//EX12) Write a function to remove the Search Looking class item



//this is here to help me to remember the logic of js

membersContainer.append(li) //undefined. you have to define the li {within the brackets}Otherwise its outside of the scope

function addNewMember(name){
    if (name){ //if name is not undefined (it has a value)
         membersContainer = document.querySelector("#membersUL") //we get a reference to the UL
          var li = document.createElement('li')  //we create the new list item
               li.textContent = name //we specify the text in it
               membersContainer.append(li) //we add the LI to the UL
        input = document.querySelector("#inputName") // we are getting a reference to input
               input.value = '' //we empty the value in input
  }
}
