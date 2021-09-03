function addBorder(picture: string[]): string[] {
    // const lengthOfWall = picture[0].length + 2;
    // let myWall = '';

    // for (let i = 0; i<lengthOfWall; i++) {
    //     myWall = myWall.concat("*");
    // }

    // Refactor

    let myWall = "*".repeat(picture[0].length + 2);
    
    for (let index = 0; index < picture.length; index++) {
        picture[index] = "*".concat(picture[index]).concat("*");
        
    }
    picture.unshift(myWall);
    picture.push(myWall)

    return picture;
}

 console.log(addBorder(["abc", "ded"]));