let player = 'X';
let counter = 2;
let grid = Array(9).fill('');
let winstate = false;

function reset() {
    console.log('reset');
    player = 'X';
    counter = 2;
    grid = Array(9).fill('');
    winstate = false;
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.color = 'white';
        document.getElementById("header").innerHTML = 'Noughts & Crosses';
    }
};

function place(x) {
    if (document.getElementById(x).innerHTML == '' &&
        winstate == false) {
        document.getElementById(x).innerHTML = player;
        counter ++;

        grid[x] = player;
        winCheck(player);

        if (counter % 2 == 0) {
            player = 'X';
        } else {
            player = 'O';
        }
    }
    else {
        //pass
    }
};

function winCheck(player) {
    //Horizontal
    for (let i = 0; i < 9; i+=3) {
        if (grid[i] == player && 
            grid[i+1] == player && 
            grid[i+2] == player) {
            win(player);
        }
    }

    //Vertical
    for (let i = 0; i < 3; i++) {
        if (grid[i] == player && 
            grid[i+3] == player &&
            grid[i+6] == player) {
            win(player);
        }
    }

    //Diagonal
    if (grid[0] == player && 
        grid[4] == player && 
        grid[8] == player) {
        win(player);
    }

    if (grid[2] == player 
        && grid[4] == player 
        && grid[6] == player) {
        win(player);
    
    let spaceCount = 0;
    for (let i = 0; i < 9; i++) {
        if (grid[i] == '') {
            spaceCount ++
        }
        if (spaceCount == 0) {
            document.getElementById("header").innerHTML = 'Draw.'
        }
    }
};
};

function win(player) {
    document.getElementById("header").innerHTML = player + ' wins.';
    winstate = true
    for (let i = 0; i < 9; i++) {
        if (grid[i] == player) {
            document.getElementById(i).style.color = 'orange';
        }
    }
};