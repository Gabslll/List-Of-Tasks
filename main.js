
$(document).ready(function() {
    $('form button').click(function()  {
        
        $('form').on('submit', function(e) {
            e.preventDefault();
            const resTasks = $('#res').val();
            const newTasks = $('.tasks');
            const taskItem = $(`<li>${resTasks}</li>`);
        
            taskItem.click(function() {
                $(this).toggleClass('completed');
            });

            taskItem.appendTo(newTasks);

            $('#res').val('');
        });
        });
    });

