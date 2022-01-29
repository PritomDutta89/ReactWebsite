
const add = (a,b) => {
    let sum = a+b;
    return sum;
}

const sub = (a,b) => {
    let sub = a-b;
    return sub;
}

const mul = (a,b) =>{
    let mul = a*b;
    return mul;
}

const div = (a,b) =>{
    let div = a/b;
    div = div.toFixed(2);
    return div;
}

export {add,sub,mul,div};

