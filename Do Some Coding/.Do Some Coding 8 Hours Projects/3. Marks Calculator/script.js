const calculateFormEl = document.getElementById('calc_form');
const marksDisplay = document.getElementById('marksDisplay');


const calculateMarks = (event) =>{
    event.preventDefault();



    const formData = new FormData(calculateFormEl);
    const data = {};

    formData.forEach((elem, index) =>{
        data[index] = +elem;
    })

    const totalMarks = 400;
    const totalStudentmarks = data.math + data.english + data.hindi + data.science;

    const parcentage =((totalStudentmarks/totalMarks)*100).toFixed(2);

    marksDisplay.innerText = `You have got ${totalStudentmarks} marks out of ${totalMarks} marks and your parecentage is ${parcentage}%`

    calculateFormEl.after(resultEl);
}