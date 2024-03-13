const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
const input = document.querySelector('input')
const h2 = document.querySelector('h2')
const footer = document.querySelector('footer')

function calc() {
    let kod = ''
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()

    let inp = input.value.split('-')

    if (!input.value) {
        alert('Set date')
    }
    else {
        if (inp[0] == currentYear) {
            if (inp[1] == currentMonth + 1) {
                if (currentDay >= inp[2]) {
                    year.innerHTML = '0 Years'
                    month.innerHTML = '0 Month'
                    day.innerHTML = `${currentDay - inp[2]} Day`
                    h2.innerHTML = ''
                }
                else h2.innerHTML = 'Not born yet'
            }
            else if (inp[1] <= currentMonth + 1) {
                if (currentDay >= inp[2]) {
                    year.innerHTML = '0 Years'
                    month.innerHTML = `${currentMonth + 1 - inp[1]} Month`
                    day.innerHTML = `${currentDay - inp[2]} Day`
                    h2.innerHTML = ''
                }
                else {
                    year.innerHTML = '0 Years'
                    month.innerHTML = `${currentMonth - inp[1]} Month`
                    day.innerHTML = `${30 - (inp[2] - currentDay)} Day`
                    h2.innerHTML = ''
                }
            }
            else h2.innerHTML = 'Not born yet'
        }
        else if (inp[0] < currentYear) {
            if (inp[1] == currentMonth + 1) {
                if (currentDay >= inp[2]) {
                    year.innerHTML = `${currentYear - inp[0]} Years`
                    month.innerHTML = '0 Month'
                    day.innerHTML = `${currentDay - inp[2]} Day`
                }
                else {
                    year.innerHTML = `${currentYear - inp[0] - 1} Years`
                    month.innerHTML = `${12 - (inp[1] - currentMonth)} Month`
                    day.innerHTML = `${30 - (inp[2] - currentDay)} Day`
                }
            }
            else if (inp[1] > currentMonth + 1) {
                if (currentDay >= inp[2]) {
                    year.innerHTML = `${currentYear - inp[0] - 1} Years`
                    month.innerHTML = `${12 - (inp[1] - currentMonth) + 1} Month`
                    day.innerHTML = `${currentDay - inp[2]} Day`
                }
                else {
                    year.innerHTML = `${currentYear - inp[0] - 1} Years`
                    month.innerHTML = `${12 - (inp[1] - currentMonth)} Month`
                    day.innerHTML = `${30 - (inp[2] - currentDay)} Day`
                }
            }
            else {
                if (currentDay >= inp[2]) {
                    year.innerHTML = `${currentYear - inp[0]} Years`
                    month.innerHTML = `${currentMonth + 1 - inp[1]} Month`
                    day.innerHTML = `${currentDay - inp[2]} Day`
                }
                else {
                    year.innerHTML = `${currentYear - inp[0]} Years`
                    month.innerHTML = `${currentMonth - inp[1]} Month`
                    day.innerHTML = `${30 - (inp[2] - currentDay)} Day`
                }
            }
        }
        else h2.innerHTML = 'Not born yet'
    }


    if (!h2.innerHTML == '') {
        footer.style.marginTop = "55px"
        h2.style.marginTop = '100px'
    }
    else h2.style.marginTop='200px'
}


