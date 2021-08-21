
//Make e-mails and github links




const generateTeam = teamArr => {
  const mgrArray = teamArr.filter(x => x.role === 'Manager');
  const engArray = teamArr.filter(x => x.role === 'Engineer');
  const intArray = teamArr.filter(x => x.role === 'Intern');

  let cont = "";
  cont = cont + `
  <div class="row">
  `;
  mgrArray.forEach((emp, ind) => {
    genderPic = "./src/" + emp.empId + ".jpg";
    cont = cont + `
      <div class="card mx-auto col-sm-5">
      <img src="${genderPic}" alt="Avatar" style="width:50%">
        <div class="container">
          <h4><b>Manager: ${emp.name}</b></h5>
          <p>Employee ID: ${emp.empId}</p>
          <p>Email:<a href = "mailto: ${emp.empEmail}">${emp.empEmail}</a></p>
          <p>Office: ${emp.officeNum}</p>
        </div>
      </div>
    `;
  });
  cont = cont + `
  </div>
  <div class="row">
  `;
  engArray.forEach((emp, ind) => {
    genderPic = "./src/" + emp.empId + ".jpg";
    cont = cont + `
      <div class="card mx-auto col-sm-4">
      <img src="${genderPic}" alt="Avatar" style="width:50%">
        <div class="container">
          <h4><b>Engineer: ${emp.name}</b></h5>
          <p>Employee ID: ${emp.empId}</p>
          <p>Email: <a href = "mailto: ${emp.empEmail}">${emp.empEmail}</a></p>
          <p>GitHub: <a href = "https://github.com/"${emp.github} >${emp.github}</a></p>
        </div>
      </div>
    `;
  });
  cont = cont + `
  </div>
  <div class="row">
  `;
  intArray.forEach((emp, ind) => {
    genderPic = "./src/" + emp.empId + ".jpg";
    cont = cont + `
      <div class="card mx-auto col-sm-3">
      <img src="${genderPic}" alt="Avatar" style="width:50%">
        <div class="container">
          <h4><b>Intern: ${emp.name}</b></h5>
          <p>Employee ID: ${emp.empId}</p>
          <p>Email: <a href = "mailto: ${emp.empEmail}">${emp.empEmail}</a></p>
          <p>School: ${emp.intSchool}</p>
        </div>
      </div>
     `;
  });
  return cont;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  // const { projects, about, ...header } = templateData;
  // templateData => console.log(templateData);
  //Create 3 arrays mgrArray,engArray,intArray


  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator Demo</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./dist/style.css">
  </head>
  
  <body>
    <header>
    <div class="container flex-row justify-space-between align-center py-3">
    <h1 class="page-title text-secondary bg-dark py-2 px-3">TEAM STARK</h1>

  </div>
    </header>
    <main class="container">
    ${generateTeam(templateData)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by awiebe</h3>
    </footer>
  </body>
  </html>
  `;
};
