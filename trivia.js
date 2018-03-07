  var trivia = [
    {
      question: 'Life, head, heart, and destiny are the four main topics what practice?',
       possibleAnswers: ['astrology', 'eschatology', 'palm-reading', 'numerology'],
       answer: 'palm-reading'
     },
    {
      question: 'If you had one bill (i.e. paper money not coins) with each President on Mt. Rushmore, how much money would you have?',
      possibleAnswers: ['$1', '$5','$6', '$7'],
      answer: '$7'
    },
    {
      question: 'What is secreted by lachrymose glands?',
      possibleAnswers: ['seratonin', 'tears', 'insulin', 'milk'],
      answer: 'tears'
    },
    {
      question: 'What would you find in a ossuary?',
      possibleAnswers: ['bones', 'bears', 'bells', 'birds'],
      answer: 'bones'
    },
    {
      question: 'In what country was basketball invented?',
      possibleAnswers: ['Australia', 'USA', 'Canada', 'Sweden'],
      answer: 'Canada'
    }
  ]

  var button = $("<button>").addClass("btn btn-default")
  var instruction = $("<h1>")
  var clock = $("<div>").addClass("clock")
  var question = $("<h3>")

  $(document).ready(function(){
    $("#ready").on("click", startGame)
  })

  function startGame(){
    // initialize the variables we'll need to track from round to round
    var round = 0
    var correctCount = 0
    //move the scoreboard to the top
    $(".scoreboard").css("margin-top", "0px")
    $(".game").css("opacity", "1");
    // start the round
    startRound()

    function startRound(){
      // if we have questions left
      if (round <= 4){
        loadScoreBoard(10)
        loadGame()
        return
      }
      // display results
    }
    function loadScoreBoard(time){
      instruction.html("Question " + (round + 1))
      $(".scoreboard").html(instruction)
      clock.html(time)
      $(".scoreboard").append(clock)
      // contdown
      var timer = setInterval(function(){
        // if countdown done
        time--
        if (time == 0){
          clearInterval(timer)
          // go to the next question
          round++
          startRound()
        }
        clock.html(time)
      }, 1000)
    }
    function loadGame(){
      question.html(trivia[round].question)
      console.log(question)
      $(".game").html(question)
    }

  }
