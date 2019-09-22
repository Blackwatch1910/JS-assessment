$(document).ready(function () {
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function (data, status) {
        console.log(data);

        //var items = document.getElementsByClassName('quiz-item');
        var myArr;
        var score = 0;
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].answer);
            //console.log(typeof(data[i].answer))
        }

        $('#btn-submit').click(function (e) {
            e.preventDefault();

            var res1 = $('input:radio[name="q1"]:checked').get();
            console.log(res1[0].defaultValue)

            var res2 = $('input:radio[name="q2"]:checked').get();
            console.log(res2[0].defaultValue)

            var res3 = $('input:radio[name="q3"]:checked').get();
            console.log(res3[0].defaultValue)

            var res4 = $('input:radio[name="q4"]:checked').get();
            console.log(res4[0].defaultValue)

            var res5 = $('input:radio[name="q5"]:checked').get();
            console.log(res5[0].defaultValue)

            if (res1[0].defaultValue == (data[0].answer))
                score++;

            if (res2[0].defaultValue == data[1].answer)
                score++;

            if (res3[0].defaultValue == data[2].answer)
                score++;

            if (res4[0].defaultValue == data[3].answer)
                score++;

            if (res5[0].defaultValue == data[4].answer)
                score++;


            console.log('Score => ' + score);

            $("#modal-wrapper").show();

            $('#result').text(score + "/5");

        })

        //for(var i = 0; i < )

    })
})