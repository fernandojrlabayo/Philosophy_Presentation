var sender = [
    "Al Joshua Matibag",
    "Carlo Caranyagan",
    "Fernando Orlinga Labayo Jr.",
    "Karencye Pingol",
    "Rainier Jean Mansing",
    "Ricah Ranches",
    "Ryan Eroll Ayon"
]
var quotes = [
    '"I think; therefore I am"',
    '"Punyeta!”',
    '"The man who asks a question is a fool for a minute, the man who does not ask is a fool for life"',
    '"Hell is empty and all the devils are here."',
    '"Most people do not really want freedom involves responsibility & most people are frightened of responsibility."',
    '"There is only one way to happiness and that is to cease worrying about things which beyond the power of our will."',
    '"Live the life you love. Love the life you live."'
]
var author = [
    "-Rene Descartes",
    "-Heneral Luna",
    "-Confucius",
    "-William Shakespeare",
    "-Sigmund Freud",
    "-Epictetus",
    "-Bob Marley"

]

function generatemoto(){
    var randomnumber = Math.floor(Math.random() * (sender.length));
    document.getElementById('sender').innerHTML = sender[randomnumber];
    document.getElementById('quotes').innerHTML = quotes[randomnumber];
    document.getElementById('author').innerHTML = author[randomnumber];
}