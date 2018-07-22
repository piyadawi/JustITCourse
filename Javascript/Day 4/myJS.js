//This is my main JS



function Quiz(question, show_default, answer1, answer2, answer3, answer4, the_answer) {
    
    this.question = question;
    this.show_default = show_default;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.the_answer = the_answer;    
}


//My JS code starts here

var lessonsIndex;

//var current_answer = 0;

var lessons = document.getElementsByName("lessonsN");
//console.log(buttons);

for (var i = 0; i < lessons.length; i++) {
    
    lessons[i].onclick = function(e) {
        //alert(this.value);
        //console.log(lessons);
    
    lessonsIndex = this.value; 
    console.log(lessonsIndex);
        
    var get_title = document.getElementById("q" + this.value + "_title").innerHTML;
    document.getElementById("qAll_title").innerHTML = get_title + " Quiz";
    
    document.getElementById("qAll_questions").className = "hide";
    document.getElementById("submit_answer").className = "submit_answer btn btn-primary";
    
    document.getElementById("actual_quiz_all").className = "quiz_display show_it";
  
    document.getElementById("quiz_1_resp").innerHTML = "";
        
    document.getElementById("quiz_2_resp").innerHTML = "";
        
    //console.log(lessonsIndex); 
        
    //Starts the quiz to display the questions
    var start_quiz_btn = document.getElementById("start_quiz");
        
    start_quiz_btn.onclick = function() {

        document.getElementById("qAll_questions").className = "";
        //console.log(get_title);
        
        document.getElementById("quiz_1_resp").innerHTML = "";
        
        document.getElementById("quiz_2_resp").innerHTML = "";
        
        var clearCW = document.getElementsByName("tick");
        
        for( var i = 0; i < clearCW.length; i++) {
            
            clearCW[i].innerHTML = "";
            
        }

        
        if(lessonsIndex == 1) {
            
            var question1 = new Quiz("What is a key benefit for using HTML5?",
                         "Choose an answer",
                         "It works with many different types of devices without alteration.",
                         "It introduces JavaScript to the development community.",
                         "It provides plug-ins for running video and audio.",
                         "It phases out hyperlinks with touch-screen capabilities.",
                         2
                        );

var question2 = new Quiz("What version of HTML introduced CSS?",
                         "Choose an answer",
                         "HTML 3.2",
                         "HTML 4.0",
                         "XHTML",
                         "HTML5 ",
                         3
                        );

var question3 = new Quiz("Which of the following is used with the HTML5 &lt;video&gt; element to identify the location and file name of the media resource?",
                         "Choose an answer",
                         "The type attribute",
                         "The src attribute",
                         "The &lt;source&gt; element",
                         "The &lt;audio&gt; element",
                         3
                        );

var question4 = new Quiz("Which HTML5 structure element defines hypertext menus to access various pages of a Web site?",
                         "Choose an answer",
                         "&lt;header&gt;",
                         "&lt;article&gt;",
                         "&lt;aside&gt;",
                         "&lt;nav&gt;",
                         5
                        );

var question5 = new Quiz("What is one advantage that HTML5 APIs offer for modern Web design?",
                         "Choose an answer",
                         "They enable users to view Flash content on mobile devices.",
                         "They enable developers to create apps without any coding knowledge.",
                         "They enable older browsers to display any type of multimedia content. ",
                         "They enable users to view content such as multimedia without a plug-in.",
                         5
                        );

var question6 = new Quiz("The terms 'HTML5 family' and 'Web development trifecta' are sometimes used to refer to which combination of Web technologies?",
                         "Choose an answer",
                         "HTML5, CSS3 and JavaScript",
                         "HTML5, XML and CSS3",
                         "HTML5, JavaScript and Flash",
                         "HTML5, Flash and XML",
                         2
                        );

var question7 = new Quiz("Which HTML5 structure element was designed to enclose Web site content such as company services, blogs, images and videos?",
                         "Choose an answer",
                         "&lt;header&gt;",  
                         "&lt;footer&gt;",  
                         "&lt;article&gt;", 
                         "&lt;aside&gt;",
                         4
                        );

var question8 = new Quiz("Which element introduced in HTML5 saves mobile device resources by avoiding the use of plug-ins to play MP4 files?",
                         "Choose an answer",
                         "&lt;embed&gt;",  
                         "&lt;audio&gt;",  
                         "&lt;doctype&gt;", 
                         "&lt;video&gt;",
                         5
                        );

        } 




//function questionsA() {

var quiz_c_question_list = [];
quiz_c_question_list.push(question1);
quiz_c_question_list.push(question2);
quiz_c_question_list.push(question3);
quiz_c_question_list.push(question4);
quiz_c_question_list.push(question5);
quiz_c_question_list.push(question6);
quiz_c_question_list.push(question7);
quiz_c_question_list.push(question8);

var list_questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];
var list_answers = ["questions_1", "questions_2", "questions_3", "questions_4", "questions_5", "questions_6", "questions_7", "questions_8"];
var list_inputs = ["question1_answer", "question2_answer", "question3_answer", "question4_answer", "question5_answer", "question6_answer", "question7_answer", "question8_answer"];

for (i = 0; i < quiz_c_question_list.length; i++) {
    document.getElementById(list_questions[i]).innerHTML = quiz_c_question_list[i].question;
    document.getElementById(list_answers[i]).innerHTML = 
        "<option selected disabled>" + quiz_c_question_list[i].show_default + "</option>" + 
        "<option>" + quiz_c_question_list[i].answer1 + "</option>" +
        "<option>" + quiz_c_question_list[i].answer2 + "</option>" +
        "<option>" + quiz_c_question_list[i].answer3 + "</option>" +
        "<option>" + quiz_c_question_list[i].answer4 + "</option>";

}
        
        

var check_answer = document.getElementById("submit_answer");
check_answer.addEventListener("click", correct_answer, false );

function correct_answer() {
    
    var current_answer = 0;
    var score = 0;

    for (i = 0; i < quiz_c_question_list.length; i++) {
        current_answer = document.getElementById(list_answers[i]).selectedIndex + 1;

        
        if (current_answer === 1) {
        document.getElementById("quiz_1_resp").innerHTML = "Please choose an answer(s) from the dropdown";
    //}
        
        } else {
        
        if(current_answer === quiz_c_question_list[i].the_answer) {
            score++;
            
            document.getElementById(list_inputs[i]).innerHTML = '<i class="correct">Correct</i>';
            
        } else {
            
            document.getElementById(list_inputs[i]).innerHTML = '<i class="wrong">Wrong</i>';
            
        }


    var q2_get = document.getElementById("quiz_" + lessonsIndex);
    //console.log(lessonsIndex);
    var q2_correct_ans = q2_get.querySelector(".correct_incorrect");
    
    
        if (score === quiz_c_question_list.length) {       
        q2_correct_ans.innerHTML = score + "/" + quiz_c_question_list.length + " correct answers";
        document.getElementById("quiz_1_resp").innerHTML = score + "/" + quiz_c_question_list.length + " correct answers ";
        
        document.getElementById("quiz_2_resp").innerHTML = "Well done! You have successfully tested your knowledge for this lesson, click the CLOSE BUTTON.";
    }
    else if (score > 0) {       
        q2_correct_ans.innerHTML = score + "/" + quiz_c_question_list.length + " correct answers";
        document.getElementById("quiz_1_resp").innerHTML = score + "/" + quiz_c_question_list.length + " correct answers ";
        
        document.getElementById("quiz_2_resp").innerHTML = "Keep going! You should TRY AGAIN to get 8/8 correct answers or click the CLOSE BUTTON.";
    }
    else if (score === 0) {
        q2_correct_ans.innerHTML = "0/" + quiz_c_question_list.length + " correct answer";
        document.getElementById("quiz_1_resp").innerHTML = "0/" + quiz_c_question_list.length + " correct answer ";
        
        document.getElementById("quiz_2_resp").innerHTML = "Not good! You must revise the lesson or TRY THE QUIZ AGAIN, otherwise click the CLOSE BUTTON.";
    }
    
    var calc = ((100 / quiz_c_question_list.length) * score).toFixed(0);    
    var quiz_class = document.getElementById("quiz_score" + lessonsIndex);
    quiz_class.innerHTML = calc + "%";

        }

    }

}
    
};
        
};
    
    
}

