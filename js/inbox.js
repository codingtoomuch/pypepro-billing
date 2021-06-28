//materilize js support 

//select input field support 
document.addEventListener('DOMContentLoaded', function() {
  var select_el = document.querySelectorAll('select');
    M.FormSelect.init(select_el);
});
// Content Toggle Class - Body Tag
document
    .querySelector(".inbox_toggle_btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#main__content").classList.toggle("right_sidebar_active");
    });
//inbox conversation dropdown

document.addEventListener('DOMContentLoaded', function() {
  var dropdown_trigger1 = document.querySelectorAll('.chatbox-area .dropdown-trigger');

  M.Dropdown.init(dropdown_trigger1, {
    alignment: 'left'
  });
  var dropdown_trigger2 = document.querySelectorAll('.dropdown2');
  
  M.Dropdown.init(dropdown_trigger2, {
    alignment: 'right'
  });
});


//collapsible 
var collapsible = document.querySelectorAll('.collapsible');
 M.Collapsible.init(collapsible, {
  accordion: false
});

// Tiny Mce [Text]
tinymce.init({
  selector: 'textarea#basic-example-text',
  placeholder: 'Type your SMS',
  menubar: false,
  branding: false,
  height: 150,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen colorpicker',
    'media paste imagetools help'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:rgba(60, 126, 243, 0.1); font-size:14px }'
});
// Tiny Mce [Email]
tinymce.init({
  selector: 'textarea#basic-example-email',
  placeholder: 'Type your SMS',
  menubar: false,
  branding: false,
  height: 150,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen colorpicker',
    'media paste imagetools help'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:rgba(60, 126, 243, 0.1); font-size:14px }'
});

// Tiny Mce [video]
tinymce.init({
  selector: 'textarea#basic-example-video',
  placeholder: 'Type your SMS',
  menubar: false,
  branding: false,
  height: 150,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen colorpicker',
    'media paste imagetools help'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:rgba(60, 126, 243, 0.1); font-size:14px }'
});
// Tiny Mce [chat]
tinymce.init({
  selector: 'textarea#basic-example-chat',
  placeholder: 'Type your SMS',
  menubar: false,
  branding: false,
  height: 150,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen colorpicker',
    'media paste imagetools help'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:rgba(60, 126, 243, 0.1); font-size:14px }'
});
// Tiny Mce [note]
tinymce.init({
  selector: 'textarea#basic-example-note',
  placeholder: 'Type your SMS',
  menubar: false,
  branding: false,
  height: 150,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen colorpicker',
    'media paste imagetools help'
  ],
  toolbar: 'insertfile undo redo | styleselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image |print preview media | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif;background:rgba(60, 126, 243, 0.1); font-size:14px }'
});

    //inbox tabs

    document.addEventListener('DOMContentLoaded', function() {

      var elements = document.getElementsByClassName("inbox-tab");
      var target = document.querySelector('.chatbox-area');
      for(var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
          target.className = 'chatbox-area '+this.getAttribute('inbox-expand');
        }
      }

    });
    