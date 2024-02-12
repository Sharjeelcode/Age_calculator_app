let input_date = document.getElementById("input_date")
let check_btn = document.getElementById("check_btn")


let date_today = new Date().toISOString().split('T')[0]
let today_year = date_today.split('-')[0];
let today_month = date_today.split('-')[1];
let today_day = date_today.split('-')[2];

console.log(date_today);
// console.log(today_day);
// console.log(today_month);
// console.log(today_year);


check_btn.addEventListener('click',()=>{
    let user_value = input_date.value
    let user_year = user_value.split("-")[0]
    let user_month = user_value.split("-")[1]
    let user_day = user_value.split("-")[2]
    console.log(eval( today_year - user_year));
    console.log(eval( user_month - today_month));
    console.log(eval(user_day - today_day));
})
