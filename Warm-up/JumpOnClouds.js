function jumpingOnClouds(c) {
    let numJump = 0;
    let i = 0;

    do {
        numJump ++;

        i = c[i + 2] == 0 ? i + 2 : i + 1;

    } while (i < c.length - 1);

    return numJump;

}

c = [ 0, 0, 0, 0, 1, 0]

jumpingOnClouds(c)