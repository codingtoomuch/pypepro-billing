document.addEventListener('DOMContentLoaded', function() {
    var modals_el = document.querySelectorAll('.modal');
   M.Modal.init(modals_el);
});

$(document).ready(function(){
  //  $('.modal').modal();

    ////////////////toggle
    $(".toggle-class1").click(function(){
        $('.toggle-class2.row').slideToggle(700);
        return false;

    });

    //counter input
    $(".plus").click(function(){
        var val= $(".number").val();
        val++;
        if(val >= 0){
            $(".number").attr("value", val);
        }
    });
    $(".minus").click(function(){
        var val= $(".number").val();
        val--;
        if(val >= 0){
            $(".number").attr("value", val);
        }
    });

    $('.datepicker').datepicker();
    $('.timepicker').timepicker();


    //html editor
    tinymce.init({
        selector: "#mytextarea, #mytextarea2",
        height: 200,
        placeholder: 'Type Here',
        menubar: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste emoticons"
        ],
        toolbar:
            "styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons",
        skin: "small",
        icons: "",
        setup: function (editor) {
            editor.on("keyup", function (e) {
                updateHTML(editor.getContent());
            });
            editor.on("change", function (e) {
                updateHTML(editor.getContent());
            });
        }
    });

// function updateHTML(content) {
// cmeditor.getDoc().setValue(content);
// }

    function updateEditor() {
        if (!tinymce.activeEditor.hasFocus()) {
            tinymce.activeEditor.setContent(cmeditor.getDoc().getValue());
        }
    }

// var HTMLContainer = document.querySelector(".HTMLContainer");

// var cmeditor = CodeMirror(HTMLContainer, {
// lineNumbers: true,
// mode: "htmlmixed"
// });

// cmeditor.on("change", (editor) => {
// updateEditor();
// });



});

$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

//Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
        next_fs.show();
//hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
// for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

//Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
        previous_fs.show();

//hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
// for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width",percent+"%")
    }

    $(".submit").click(function(){
        return false;
    })

});


jQuery(function($) {
    //$(".button-collapse").sideNav();

});

jQuery(function($) {
    $("td input[type=checkbox]").on('change', function (e) {
       // console.log('change');
        row = $(this).closest('tr');
       // console.log(row);
       // console.log($(this).is(':checked'));
        if ($(this).is(':checked')) {
            row.addClass('selected');
        } else {
            row.removeClass('selected');
        }
    });
});
