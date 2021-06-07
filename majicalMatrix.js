function majicMatrix(matrix) {

    let sum = matrix[0].reduce((a, b) => a + b, 0);

    let isMajic = true;

    for (let i = 0; i < matrix.length; i++) {

        let currSum = matrix[i].reduce((a, b) => a + b, 0);
        if (sum != currSum) {

            isMajic = false;
        }

        for (let h = 0; h < matrix[i].length; h++) {

            let currSum2 = 0;

            for (let j = 0; j < matrix.length; j++) {

                currSum2 += matrix[i][j];

            }
            if (sum != currSum2) {

                isMajic = false;
            }

        }



    }




    console.log(isMajic);

}

// majicMatrix([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]);