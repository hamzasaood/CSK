// Set the date we're counting down to
var startDate = $('#timerDate').val();
if(typeof startDate != 'undefined'){
    //var countDownDate = new Date("2018-12-9 14:20").getTime();
    var countDownDate = new Date(startDate).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
        
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var timerHtml = '';

        if(days > 0){
            days = days + 1;
            timerHtml = days+' Days';
        }else if(hours > 0){
            if(hours == 1){
                timerHtml = hours+' Hour';
            }else{
                timerHtml = hours+' Hours';
            }
        }else if(minutes > 0){
            if(minutes == 1){
                timerHtml = minutes+' Minute';
            }else{
                timerHtml = minutes+' Minutes';
            }
        }else if(seconds > 0){
            timerHtml = '1 Minute';
            /*if(seconds == 1){
                timerHtml = seconds+' Second';
            }else{
                timerHtml = seconds+' Seconds';
            }*/
        }
        $('#mobile-timer').html(timerHtml);
        if (distance < 0) {
            clearInterval(x);
            $('#mobile-timer').html('PROMOTION EXPIRED');
        }
    }, 1000);
}