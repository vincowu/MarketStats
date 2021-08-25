export function formatTime(time) {
    let date = time
    let year = ((date.getFullYear()).toString()).padStart(2, '0');
    let month = ((date.getMonth() + 1).toString()).padStart(2, '0');
    let day = ((date.getDate()).toString()).padStart(2, '0');
    return (
        `${year}-${month}-${day}`
    )
}

export function subtractWeek(time) {
    let date = time; // today!
    let oneWeek = 7; // go back 5 days!
    date.setDate(date.getDate() - oneWeek);
    return date
}