const addBtn = document.querySelector('.add-course');
const btnClear = document.querySelector('.remove-course');
const courseContainer = document.querySelector('.inp-group');
const btnCalculate = document.querySelector('.btn-calculate');
const gpaEl = document.querySelector('.gpa-value');

const gradeMapper = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

function addCourse() {
  const html = `
    <div class="flex">
      <input type="text" placeholder="Eg. Advanced Calculus" />
      <select class="grade">
        <option value="">Select</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
      <input type="number" class="score" placeholder="Eg. 20" />
      <button type="button" class="delete">&times;</button>
    </div>
    `;

  courseContainer.insertAdjacentHTML('beforeend', html);
}

function removeCourse(e) {
  if (!e.target.classList.contains('delete')) return;
  e.target.parentElement.remove();
}

function clearAll() {
  courseContainer.innerHTML = '';
}

addBtn.addEventListener('click', addCourse);
btnClear.addEventListener('click', clearAll);
courseContainer.addEventListener('click', removeCourse);

function calculate() {
  const gradesEl = document.querySelectorAll('.grade');
  const grades = [...gradesEl].map(el => gradeMapper[el.value]);

  const creditsEl = document.querySelectorAll('.score');
  const credits = [...creditsEl].map(el => +el.value);
  const totalGrades = credits.reduce((prev, cur) => prev + cur, 0);

  const grade_X_credit = credits.map((credit, i) => credit * grades[i]);
  const total_grade_X_credit = grade_X_credit.reduce(
    (prev, cur) => prev + cur,
    0
  );
  const gpa = total_grade_X_credit / totalGrades;
  gpaEl.textContent = gpa.toFixed(2);
}

btnCalculate.addEventListener('click', calculate);
