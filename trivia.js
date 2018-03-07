  var trivia = [
    {
      question: 'life, head, heart, and destiny are the four main topics what practice?',
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

  var button = $("<button>")
  button.addClass("btn btn-default")
  var instruction = $("<h1>")
  var clock = $("<div>").addClass("clock")

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
    startRound(round, correctCount)
  }

  function startRound(roundNum, correctNum){
    // if we have questions left
    if (roundNum <= 4){
      loadScoreBoard(roundNum, 10)
      loadGame(roundNum)
      return
    }
    // display results
  }

  function loadScoreBoard(number, time){
    instruction.html("Question " + (number + 1))
    $(".scoreboard").html(instruction)
    $(".scoreboard").append(clock)
    // contdown
    var timer = setInterval(function(){
      // if countdown done
      if (time == 0){
        clearInterval(timer)
        // go to the next question
      }
      $(".clock").html(time)
      time--
    }, 1000)

  }

  function loadGame(index){
    question = trivia[index].question
    console.log(question)
  }
