$(() => {

  // require('../scss/main.scss');

  const url = "http://localhost:4000";
  let title = $(".recipe-headline__title");
  let subtitle = $(".recipe-headline__subtitle");
  let image = $(".recipe-img-main img");
  let ingredients = $(".recipe-text__ingredients");
  let directions = $(".recipe-text__directions");

  $.ajax({
    method: "GET",
    url: url + "/recipes",
    dataType: "json"
  }).done(function(response) {
    console.log(response);
    let resp = response[0];
    title.text(resp.title);
    subtitle.text(resp.subtitle);
    image.attr("src", resp.image);
    for (var i = 0; i < resp.ingredients.length; i++) {
      let ingredientsItems = $("<li>");
      ingredientsItems.text(resp.ingredients[i]);
      ingredients.append(ingredientsItems);
    }
    directions.text(resp.directions);
  });

});
