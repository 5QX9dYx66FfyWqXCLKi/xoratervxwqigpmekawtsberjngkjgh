$(document).ready(function(){
    function findParent(element, parent) {
        if (!element.is(parent)) {
            element = element.parents(parent);
        }
        return element;
    }

    $('body').on('click','a[data-toggle="modal"]',function(e){
        var action = $(this).attr('data-href');
        var book_id = $(this).attr('data-book');
        
        if ($("#book_" + book_id).length == 0) {
          $.ajax({
              url : action,
              type: "GET",
              success: function(response) {
                  $('<div class="modal fade" id="book_' + book_id + '"></div>').html(response).modal();
              }
          });
          e.preventDefault();
        } else {
          $('#book_' + book_id).modal('show');
        }
    });

});