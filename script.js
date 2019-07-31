function startDisplay() {
    $(".projects").hide();
    $(".aboutMe").hide();
    $(".ContactMe").hide();
  }
  
  function showAboutMe() {
    $(".aboutButton").click(function(event) {
      $(".HomePage").hide();
      $(".ContactMe").hide();
      $(".projects").hide();
      $(".aboutMe").show();
    });
  }
  
  function showContactMe() {
    $(".contactButton").click(function(event) {
      $(".HomePage").hide();
      $(".aboutMe").hide();
      $(".projects").hide();
      $(".ContactMe").show();
    });
  }
  
  function showPortfolio() {
    $(".projectsButton").click(function(event) {
      $(".HomePage").hide();
      $(".aboutMe").hide();
      $(".ContactMe").hide();
      $(".projects").show();
    });
  }
  
  function showHomePage() {
    $(".homeButton").click(function(event) {
      $(".projects").hide();
      $(".aboutMe").hide();
      $(".ContactMe").hide();
      $(".HomePage").show();
    });
  }
  
  function startDisplay() {
    $(".projects").hide();
    $(".aboutMe").hide();
    $(".ContactMe").hide();
    showAboutMe();
    showContactMe();
    showPortfolio();
    showHomePage();
  }
  
  function portfolioSite() {
    startDisplay();
    showAboutMe();
    showContactMe();
    showPortfolio();
  }
  
  $(portfolioSite);
  