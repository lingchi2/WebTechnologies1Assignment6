$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#ready-status").text("jQuery is ready!");

  $("#selector-button").on("click", function () {
    $("#selector-output").html("<strong>ID selector</strong> updated with .html()");
    $(".demo-output").first().css({ borderLeft: "4px solid #7c3aed", backgroundColor: "#ede9fe" });
    $("button").filter("#selector-button").text("Selectors applied");
  });

  $("#hide-button").on("click", function () { $("#visibility-text").hide(); });
  $("#show-button").on("click", function () { $("#visibility-text").show(); });
  $("#toggle-button").on("click", function () { $("#visibility-text").toggle(); });

  $("#fade-in-button").on("click", function () { $("#fade-image").fadeIn(500); });
  $("#fade-out-button").on("click", function () { $("#fade-image").fadeOut(500); });
  $("#fade-toggle-button").on("click", function () { $("#fade-image").fadeToggle(500); });

  $("#slide-up-button").on("click", function () { $("#slide-panel").slideUp(400); });
  $("#slide-down-button").on("click", function () { $("#slide-panel").slideDown(400); });
  $("#slide-toggle-button").on("click", function () { $("#slide-panel").slideToggle(400); });

  var itemNumber = 2;
  $("#append-button").on("click", function () { itemNumber += 1; $("#item-list").append("<li>Appended item " + itemNumber + "</li>"); });
  $("#prepend-button").on("click", function () { itemNumber += 1; $("#item-list").prepend("<li>Prepended item " + itemNumber + "</li>"); });
  $("#remove-button").on("click", function () { $("#item-list li").last().remove(); });

  $("#change-image-button").on("click", function () { $("#attribute-image").attr("src", "https://picsum.photos/id/1039/520/180").attr("alt", "New landscape preview"); });
  $("#change-link-button").on("click", function () { $("#dynamic-link").attr("href", "https://developer.mozilla.org/en-US/docs/Web/HTML").text("Open MDN HTML documentation"); });

  $("#live-form input").on("input", function () {
    $("#live-name").text($("#name-input").val() || "—");
    $("#live-email").text($("#email-input").val() || "—");
  });
  $("#live-form").on("submit", function (event) { event.preventDefault(); });

  $("#basic-animation-button").on("click", function () {
    $("#basic-box").stop(true).animate({ left: "48%", top: "68px", width: "86px", height: "86px" }, 700);
  });
  $("#sequence-animation-button").on("click", function () {
    $("#sequence-box").stop(true).animate({ left: "70%" }, 400).animate({ top: "112px" }, 400).animate({ width: "28px", height: "28px" }, 300).animate({ left: "16px", top: "16px", width: "54px", height: "54px" }, 500);
  });
  $("#combined-animation-button").on("click", function () {
    $("#combined-box").stop(true).animate({ left: "62%", top: "92px", width: "88px", height: "88px", opacity: .35 }, 800);
  });

  $(".gallery-thumb").on("click", function () {
    var $thumb = $(this);
    $("#gallery-preview").stop(true, true).fadeOut(220, function () {
      $(this)
        .attr("src", $thumb.data("large"))
        .attr("alt", $thumb.attr("alt"))
        .fadeIn(420)
        .animate({ width: "100%", height: "250px" }, 420);
    });
    $(".gallery-thumb").removeClass("active");
    $thumb.addClass("active");
  });
});
