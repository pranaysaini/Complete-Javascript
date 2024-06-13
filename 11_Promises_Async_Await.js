// Promises
const ticket = new Promise(function(resolve, reject){  // Don't use let
    const board = true;
    if(board){
        resolve('Flight has been gone');
    }
    else{
        reject('Go in The Flight');
    }
});

ticket
    .then((data) => {
        console.log("Work has been done : ", data);
    })
    .catch((data) => {
        console.log("GTime is left : ", data);
    })
    .finally(() => {
        console.log("This statement will be executed in any circumstances");
    })

// Resolving call back hell by promises
function getEyes(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const eyes = '👀';
            resolve(eyes);
        }, 1000);
    })
}

function getGogals(eyes){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const acc = eyes + '👓';
            resolve(acc);
        }, 1000);
    });
}

function getFace(acc){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const face = acc + '👨🏻';
            resolve(face);
        }, 1000);
    });
}

getEyes()
        .then((eyes) => {
            console.log("Take Your eyes : ", eyes);
            return getGogals(eyes);
        })
        .then((acc) => {
            console.log("Take Your Gogals : ", acc);
            return getFace(acc);
        })
        .then((face) => {
            console.log("Take your face : ", face);
        })
        .catch((data) => {
            console.log("Face can't be given because of : ", data);
        })
        .finally(() => {
            console.log("Process Finished");
        });



// Async/Await
async function getFaces(){

    try{
        const eyes = await getEyes();
        console.log("Take Eyes : ", eyes);

        const gogals = await getGogals(eyes);
        console.log("Take gogals : ", gogals);

        const face = await getFace(gogals);
        console.log("Take face : ", face);
    }
    catch(err){
        console.log("Face can't be given");
    }
    finally{
        console.log("Process Finished Successfully");
    }
}
getFaces()