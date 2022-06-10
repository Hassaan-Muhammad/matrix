function start() {
    let matrix_inputS_array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix_inputS_array[i][j] = +prompt(`Enter a number for Row ${i+1} Column ${j+1} in 1st Array`);
        }
    }
    //now we gonna add matrix 1 and matrix 2
    let matrix_inputS_array2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix_inputS_array2[i][j] = +prompt(`Enter a number for Row ${i+1} Column ${j+1} in 2nd Array`);
            result[i][j] = matrix_inputS_array[i][j] + matrix_inputS_array2[i][j];
        }
    }

    document.querySelector("#td1").innerHTML = matrix_inputS_array[0][0];
    document.querySelector("#td2").innerHTML = matrix_inputS_array[0][1];
    document.querySelector("#td3").innerHTML = matrix_inputS_array[0][2];
    document.querySelector("#td4").innerHTML = matrix_inputS_array[1][0];
    document.querySelector("#td5").innerHTML = matrix_inputS_array[1][1];
    document.querySelector("#td6").innerHTML = matrix_inputS_array[1][2];
    document.querySelector("#td7").innerHTML = matrix_inputS_array[2][0];
    document.querySelector("#td8").innerHTML = matrix_inputS_array[2][1];
    document.querySelector("#td9").innerHTML = matrix_inputS_array[2][2];

    document.querySelector("#td10").innerHTML = matrix_inputS_array2[0][0];
    document.querySelector("#td11").innerHTML = matrix_inputS_array2[0][1];
    document.querySelector("#td12").innerHTML = matrix_inputS_array2[0][2];
    document.querySelector("#td13").innerHTML = matrix_inputS_array2[1][0];
    document.querySelector("#td14").innerHTML = matrix_inputS_array2[1][1];
    document.querySelector("#td15").innerHTML = matrix_inputS_array2[1][2];
    document.querySelector("#td16").innerHTML = matrix_inputS_array2[2][0];
    document.querySelector("#td17").innerHTML = matrix_inputS_array2[2][1];
    document.querySelector("#td18").innerHTML = matrix_inputS_array2[2][2];

    document.querySelector("#td19").innerHTML = result[0][0];
    document.querySelector("#td20").innerHTML = result[0][1];
    document.querySelector("#td21").innerHTML = result[0][2];
    document.querySelector("#td22").innerHTML = result[1][0];
    document.querySelector("#td23").innerHTML = result[1][1];
    document.querySelector("#td24").innerHTML = result[1][2];
    document.querySelector("#td25").innerHTML = result[2][0];
    document.querySelector("#td26").innerHTML = result[2][1];
    document.querySelector("#td27").innerHTML = result[2][2];
}