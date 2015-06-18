setTimeout(function(){
    console.log('in 1000 sec');
    setTimeout(function(){
        console.log('in 500 sec');
        setTimeout(function(){
            console.log('in 10 sec')
        }, 100)
    }, 500)
}, 1000);