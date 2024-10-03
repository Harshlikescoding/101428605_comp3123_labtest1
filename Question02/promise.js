const resolvedPromise = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve('resolved Promise');
            }, 500);
    });
};

const rejectedPromise  = () => {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            reject(new  Error('rejected Promise'));
            }, 500);
    });
 };

resolvedPromise()
.then(result => console.log(result))
.catch(error => console.log(error));

rejectedPromise()
.then(result => console.log(result))
.catch(error => console.log(error));

