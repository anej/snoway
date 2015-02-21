var quizzes = [
  {
    source: "http://www.universalhub.com/images/2015/fortnotigloo.jpg",
    isReal: true
  },
  {
    source: "http://www.wallpaperup.com/uploads/wallpapers/2013/06/13/102749/big_thumb_b412092d370cebc063d977dcca77e816.jpg",
    isReal: false
  },
{
    source: "http://www.washingtonpost.com/wp-apps/imrs.php?src=http://img.washingtonpost.com/rf/image_908w/2010-2019/WashingtonPost/2015/01/28/National-Enterprise/Images/Winter_Weather-0b4ed.jpg&w=1484",
    isReal: true
  },
{
    source: "http://d.ibtimes.co.uk/en/full/1411194/snow-car.jpg",
    isReal: true
  },
{
    source: "http://www.gannett-cdn.com/-mm-/6f1a354fb9c49cb568e28fa6660a7a3b4b80dd40/c=196-0-3260-2304&r=x513&c=680x510/local/-/media/2015/01/30/USATODAY/USATODAY/635582096206924205-SI201501280004-hires-jpeg-24bit-rgb.jpg",
    isReal: true
  },
{
    source: "http://i.dailymail.co.uk/i/pix/2014/01/19/article-2542072-00DAC6AF1000044C-754_634x423.jpg",
    isReal: false
  },
{
    source: "http://c.o0bg.com/rf/image_1200w/Boston/2011-2020/2015/02/09/BostonGlobe.com/Sports/Images/Fenway05.jpg ",
    isReal: true
  }    
];


var currentIndex = 0;
var current = quizzes[currentIndex];

var loadQuiz = function () {
  $(".sno-image").attr("src", current.source);
  $(".sno-source").attr("href", current.source);
  $(".sno-msg-real, .sno-msg-movie, .sno-btn-again").addClass("hidden");
  $(".sno-btns").removeClass("hidden");
};


var showAnswer = function() {
  if (current.isReal === true) {
    $(".sno-msg-real").removeClass("hidden");
  } else {
    $(".sno-msg-movie").removeClass("hidden");
  };
  $(".sno-btn-again").removeClass("hidden");
  $(".sno-btns").addClass("hidden");
};

$( ".sno-btn-real" ).click(showAnswer);

$( ".sno-btn-movie" ).click(showAnswer);

loadQuiz();

var clickPlayAgain = function () {
  if (quizzes.length === (currentIndex+1)) {
    currentIndex = 0;
  } else {
    currentIndex++;
  };
  current = quizzes[currentIndex];
  loadQuiz();
};

$ (".sno-btn-again").click(clickPlayAgain);