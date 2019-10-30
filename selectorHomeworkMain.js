//JS Exercises
function _$(selector) {    //in this shortcut, did you write _$ because otherwise the function would call something in jQuery or why did you have to use the underscore?
    return document.querySelector(selctor)
}

function _$$(selector) {
    return document.querySelectorAll(selector)
}

function _$c(selector) { //cannot remember if the syntax of the fuction is correct?
    return document.createElement(selector)
}
//EX11) Write a function to add a new link into the navbar
function addNewLink() {
    var parent = _$('nav')
    parent.append(document.createElement('a'))
}

addNewLink(href = "economy")

//EX12) Write a function to remove the Search Looking class item
var search = _$('svg') //why is it here that there is no funtion required? i guess remove is a function but why is does not need to be called previously?
search.remove()

//EX13) Write a function to change the background of the jumbotron
function changeBackground(color) {
    var jumbotron = _$('jumbotron')
    jumbotron.classlist.remove('bg-dark') //this has to be there bc there is a rule in bg-dark overriding the possibility to change it to red (in css you would !important it) 
    jumbotron.style.background = color
}
changeBackground('red')
//EX14) Write a function to change the color of the main title
function changeTitle(color) {
    _$('h1').style.color = color
}

changeBackground('green')

//EX15) Write a function to change the column size for post headings
function changeColumn(size){
    var posts = _$$('.blog-post')
    posts.forEach(function(post){
        post.style.width = size + "px"
    })       
}

changeColumn(200)

//EX16) Write a function to remove all the links under "Elsewhere"
function removeLinks(){
    var linksToRemove = _$('aside div:last-child ol')
    linksToRemove.remove()
}
removeLinks()

//EX17) Write a function to trim just the first 150 characters for each blog post


//EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)


//EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post


//EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name


//EX1) Write a selector to target the main title of the page//
function changeTitle() { //function is named what i want to do
    _$(h1) //i want to use this shortcut to select the main title (h1)
        = ''//do i have to empty it between selecting it and changing it? 
    //here i want to change that title
    _$(h1).innerHTML = ('Hey, I'm a new title') 
}

//EX11) Write a function to add a new link into the navbar
function addNewLink() {
    var navbar = _$c(navbar)
    navbar.textContent = "www.stratofyzika.com"
}


//this is here to remind me about js logic
//    membersContainer.append(li) //undefined. you have to define the li {within the brackets}Otherwise its outside of the scope
      
//function addNewMember(name){
    //if (name){ //if name is not undefined (it has a value)
    //membersContainer = document.querySelector("#membersUL") //we get a reference to the UL
    //var li = document.createElement('li')  //we create the new list item
    //li.textContent = name //we specify the text in it
    //membersContainer.append(li) //we add the LI to the UL
    //input = document.querySelector("#inputName") // we are getting a reference to input
    //input.value = '' //we empty the value in input
//}
//}

