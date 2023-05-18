function clockInJS() {
  // hook div with id "clock" 
    let clock = document.querySelector("#clock");
    
    // init object with date and time
    let time = new Date;

    // init vars of hour and so on
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let am_pm = "AM";

    // logic for change AM to PM
    if (h > 12) {
        h -= 12;
        am_pm = "PM";
    } if (h == 0) {
        h = 12;
        am_pm = "AM";
    }

    // add zero befor number if {variable} < 12
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // formatting text
    let text = `${h}:${m}:${s} ${am_pm}`;
    
    // ouput time to div
    clock.innerHTML = text;
};

// repeat function 1 time per second
setInterval(clockInJS, 1000);
