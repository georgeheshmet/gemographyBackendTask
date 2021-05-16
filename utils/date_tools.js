/*
function name: getMonthAgoDate
description: /*helper function to get UTC date 1 month ago in YYY-MM-DD format
Input : none
output : it returns date 1 month ago with the following format : YYY-MM-DD 
*/

export const getMonthAgoDate = () =>{
    let today_date = new Date()
    /* get unix timestamp*/
    today_date = today_date.getTime()
    /*remove no of milliseconds in the 1 month period to get timestamp 30 days ago*/
    let month_ago_date = today_date - (30*24*60*60*1000)
    month_ago_date = new Date(month_ago_date)
    /*get UTC date in YYYY-MM-DD format */
    month_ago_date = month_ago_date.toISOString().split('T')[0]
    return month_ago_date
}
