jQuery(document).ready(function ($) {
  $("#fitbase-code-form").on("submit", function (e) {
    e.preventDefault();
    var code = $("#fitbase-code-input").val();
    $.ajax({
      url: fitbaseCode.ajaxUrl,
      type: "POST",
      data: {
        action: "validate_fitbase_code",
        code: code,
      },
      success: function (response) {
        if (response.success) {
          var redirectUrl = response.data;
          window.location.href = redirectUrl;
        } else {
          $("#fitbase-code-result")
            .html("Der Code ist ungültig.")
            .addClass("error");
        }
      },
      error: function () {
        $("#fitbase-code-result")
          .html("Error occurred. Please try again.")
          .addClass("error");
      },
    });
  });

  // clear input field
  $(".cross").on("click", () => {
    $(".cst-input").val("");
    $(".register").removeClass("-translate-y-[1.8rem] scale-[0.85]");
    $(".cross").removeClass("cst-visible");
  });
  // if the input has value
  $(".cst-input").on("input", () => {
    if ($(".cst-input").val() !== "") {
      $(".register").addClass("-translate-y-[1.8rem] scale-[0.85]");
      $(".cross").addClass("cst-visible");
    } else {
      $(".register").removeClass("-translate-y-[1.8rem] scale-[0.85]");
      $(".cross").removeClass("cst-visible");
    }
  });
});
