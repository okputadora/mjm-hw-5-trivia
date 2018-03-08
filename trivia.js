  var trivia = [
    {
      question: 'Life, head, heart, and destiny are the four main topics what practice?',
       choices: ['astrology', 'eschatology', 'palm-reading', 'numerology'],
       answer: 'palm-reading'
     },
    {
      question: 'If you had one bill (i.e. paper money not coins) with each President on Mt. Rushmore, how much money would you have?',
      choices: ['$1', '$5','$6', '$7'],
      answer: '$7'
    },
    {
      question: 'What is secreted by lachrymose glands?',
      choices: ['seratonin', 'tears', 'insulin', 'milk'],
      answer: 'tears'
    },
    {
      question: 'What would you find in a ossuary?',
      choices: ['bones', 'bears', 'bells', 'birds'],
      answer: 'bones'
    },
    {
      question: 'In what country was basketball invented?',
      choices: ['Australia', 'USA', 'Canada', 'Sweden'],
      answer: 'Canada'
    }
  ]

  var button = $("<button>").addClass("btn btn-default")
  var instruction = $("<h1>")
  var clock = $("<div>").addClass("clock")
  var question = $("<h3>")
  // initializing our timer in the global scope so it can be
  // cancelled from anywhere
  var timer;

  $(document).ready(function(){
    $(document).on("click", "#ready", startGame)
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
      // clear the board
      $(".scoreboard").empty()
      $(".question").empty()
      $(".choices").empty()

      // if we have questions left
      if (round <= 4){
        loadScoreBoard(10)
        loadGame()
        return
      }
      displayAllResults()
    }
    function loadScoreBoard(time){
      instruction.html("Question " + (round + 1))
      $(".scoreboard").html(instruction)
      clock.html(time)
      $(".scoreboard").append(clock)
      timer = setInterval(function(){
        // if countdown done
        time--
        clock.html(time)
        if (time == 0){
          clearInterval(timer)
          // go to the next question
          round++
          instruction.html("you've run out of time")
          displayResult()
          return
        }
      }, 1000)
    }
    function loadGame(){
      question.html(trivia[round].question)
      console.log(trivia[round].question)
      $(".question").html(question)
      trivia[round].choices.forEach(function(choice){
        var choice = $("<button>")
          .addClass("btn btn-default choice")
          .html(choice)
        $(".choices").append(choice)
      })
    }

    function displayResult(){
      $(".scoreboard").html(instruction)
      if (round == trivia.length - 1){
        $(".question").html("<h3>That was the last question</h3>")
      }
      else{$(".question").html("<h3>Here comes the next question...</h3>")}
      $(".choices").empty()
      clearInterval(timer)
      round++
      setTimeout(function(){
        startRound()
      }, 3000)
    }

    function displayAllResults(){

      $(".question").empty()
      var incorrectCount = trivia.length - correctCount
      // handle a little grammar
      var ans = 'answers'
      if (correctCount == 1){
        ans = 'answer'
      }
      $(".question").append("<h3>You got "+correctCount+" "+ans+" right</h3></br>")
      $(".question").append("<h3>and "+incorrectCount+" wrong.</h3>")
      instruction.html("Play again?")
      $(".scoreboard").html(instruction)
      $(".scoreboard").append("<button id='ready'>Yes!</button>")
    }

    $(".choices").on("click", ".choice", function(){
      var guess = this.innerHTML
      if (guess == trivia[round].answer){
        correctCount++
        instruction.html("Correct!")
      }
      else{instruction.html("Incorrect")}
      displayResult()
    })
  }
