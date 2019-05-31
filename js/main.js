const firstSummand = document.getElementById('firstSummand');
const secondSummand = document.getElementById('secondSummand');

document.querySelector('.__sumButton').onclick = () => {
    const result = (Number(firstSummand.value) + Number(secondSummand.value)).toFixed(2);

    alert(`Результат: \n ${result}`);
};