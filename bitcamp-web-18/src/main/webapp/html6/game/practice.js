/**
 * Tic Tac Toe
 *
 * A Tic Tac Toe game in HTML/JavaScript/CSS.
 *
 * No dependencies - Uses Vanilla JS
 *
 * @author: Vasanth Krishnamoorthy
 */
var size = 3,
  EMPTY = '&nbsp;',
  boxes = [],
  turn = 'X',
  score,
  moves;

/**
 * Initializes the Tic Tac Toe board and starts the game.
 */
function init() {
  var board = document.createElement('table');
  board.setAttribute('border', 1);
  board.setAttribute('tablespacing', 0);

  var identifier = 1;
  for (var i = 0; i < size; i++) {
    var row = document.createElement('tr');
    board.appendChild(row);
    for (var j = 0; j < size; j++) {
      var table = document.createElement('td');
      table.setAttribute('height', 120);
      table.setAttribute('width', 120);
      table.setAttribute('align', 'center');
      table.setAttribute('valign', 'center');
      table.classList.add('col' + j, 'row' + i);
      if (i == j) {
        table.classList.add('diagonal0');
      }
      if (j == size - i - 1) {
        table.classList.add('diagonal1');
      }
      table.identifier = identifier;
      console.log(identifier);
      table.addEventListener('click', set);
      row.appendChild(table);
      boxes.push(table);
      identifier += identifier;
    }
  }

  document.getElementById('tictactoe').appendChild(board);
  startNewGame();
}

/**
 * New game
 */
function startNewGame() {
  score = {
    'X': 0,
    'O': 0
  };
  moves = 0;
  turn = 'X';
  boxes.forEach(function (square) {
    square.innerHTML = EMPTY;
  });
}

/**
 * Check if a win or not
 */
function win(clicked) {
  // Get all table classes
  var memberOf = clicked.className.split(/\s+/);
  for (var i = 0; i < memberOf.length; i++) {
    var testClass = '.' + memberOf[i];
    var items = contains('#tictactoe ' + testClass, turn);
    // winning condition: turn == size
    if (items.length == size) {
      return true;
    }
  }
  return false;
}

/**
 * Helper function to check if NodeList from selector has a particular text
 */
function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}

/**
 * Sets clicked square and also updates the turn.
 */
function set() {
  if (this.innerHTML !== EMPTY) {
    return;
  }
  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;
  if (win(this)) {
    alert('Winner: Player ' + turn);
    startNewGame();
  } else if (moves === size * size) {
    alert('Draw');
    startNewGame();
  } else {
    turn = turn === 'X' ? 'O' : 'X';
    document.getElementById('turn').textContent = 'Player ' + turn;
  }
}

init();