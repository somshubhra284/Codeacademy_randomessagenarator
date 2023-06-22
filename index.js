const generateRandomNumber =(num) =>{
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random()*num);
}
//console.log(generateRandomNumber(6));

const collectionJokes={
    Name:["Rohan","Ajit","Sakshi","Kabir","Kashish"],
    Animal: ["cow","giraffe","guinea-pig","peahen","emu","roadrunner"],
    Character: ["Noob","Legend","Expendable","Pro","Gangsta"]
}

const randomLine=[];

for (let prop in collectionJokes){
    let index=generateRandomNumber(collectionJokes[prop].length);
    switch(prop){
        case "Name":
            randomLine.push(`${collectionJokes[prop][index]}`);
            break;
        case "Animal":
            randomLine.push(`gives birth to an ${collectionJokes[prop][index]}`);
            break;
        case "Character":
            randomLine.push(`who becomes a ${collectionJokes[prop][index]}`);
            break;
        default:
            randomLine.push(`${collectionJokes[prop][index]}`);
            break;
    }
}
//console.log(randomLine);
const finalLines=() => {
    const formatted=randomLine.join(' ');
    console.log(formatted);
}

finalLines();