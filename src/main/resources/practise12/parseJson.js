const getBooks = function(books){
        let html = "<ul>";
        for (var i = 0; i < books.length; i++) {
            html += "<li>"+books[i].author +"</li>";
        }
        html += "</ul>";
        return html;

}


module.exports = getBooks;