  var trivia = [
    {
      question: 'life, head, heart, and destiny are the four main topics what practice?',
       possibleAnswers: ['astrology', 'eschatology', 'palm-reading', 'numerology'],
       answer: 'palm-reading'}
    {
      question: 'If you had one bill (i.e. paper money not coins) with each President on Mt. Rushmore, how much money would you have?',
      possibleAnswers: ['$1', '$5','$6', '$7'],
      answer: ['$7']
    },
    {
      question: 'What is secreted by lachrymose glands?',
      possibleAnswers: ['seratonin', 'tears', 'insulin', 'milk'],
      answer: 'tears'
    },
    {
      question: 'What would you find in a ossuary?',
      possibleAnswers: ['bones', 'bears', 'bells', 'birds'],
      answer: ['bones']
    },
    {
      question: 'In what country was basketball invented?',
      possibleAnswers: ['Australia', 'USA', 'Canada', 'Sweden'],
      answer:
    }
  ]



  $(document).ready(function(){
    $(".ready").on("click", function(){

    })
  })

  function questionAndAnswers() {
           for (var i=0; i<questionData.length; i++) {
             var questionElements = $("<div>");
             questionElements.addClass("question-box")
             questionElements.html("<p>" + questionData[i].question + "</p>");
             $("#question-box").append(questionElements);
             var questionPossibleAnswers = $('<input type="radio" name="answer-choice" value=' + [i] + '/>');
             questionPossibleAnswers.addClass("question-box");
             questionPossibleAnswers.attr("value");
             questionPossibleAnswers.html(questionData.possibleAnswers[i]);
             $("#question-box").append(questionPossibleAnswers);
           }
       }
