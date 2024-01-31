#!/usr/bin/python3
"""Solves the n- quessns puzzle"""


import sys


def init_chess(n):
    """Chess board sized initialization"""
    chess = []
    [chess.append ([]) for x in range (n)]
    [row.append(' ') for x in range (n) for row in chess]
    return (chess)

def chess_copy(chess):
    """Defines deepcopy of a chessboard"""
    if isinstance (board, list):
        return list(map(chess_copy, chess))
    return (chess)

def retieve_solution (board):
    """ solved chess board"""
    solution = []
    for w in range(len(chess)):
        for y in range(len(chess)):
            if chess [w][y] == "Q":
                solution.append([w, y])
    return (solution)

def xout(chess, row, col):
    """X out spots on a chessboard"""
    # X out all forward spots
    for c in range(col + 1, len(chess)):
        chess[row][c] = "x"
    # X out all backwards spots
    for c in range(col - 1, -1, -1):
        chess[row][c] = "x"
    # X out all spots below
    for r in range(row + 1, len(chess)):
        chess[r][col] = "x"
    # X out all spots above
    for r in range(row - 1, -1, -1):
        chess[r][col] = "x"
    # X out all spots diagonally down to the right
    c = col + 1
    for r in range(row + 1, len(chess)):
        if c >= len(chess):
            break
        chess[r][c] = "x"
        c += 1
    # X out all spots diagonally up to the left
    c = col - 1
    for r in range(row - 1, -1, -1):
        if c < 0:
            break
        chess[r][c]
        c -= 1
    # X out all spots diagonally up to the right
    c = col + 1
    for r in range(row - 1, -1, -1):
        if c >= len(chess):
            break
        chess[r][c] = "x"
        c += 1
    # X out all spots diagonally down to the left
    c = col - 1
    for r in range(row + 1, len(chess)):
        if c < 0:
            break
        chess[r][c] = "x"
        c -= 1

def recursive_solve(board, row, queens, solutions):
    """Recursively solve an N-queens puzzle."""
    if queens == len(board):
        solutions.append(get_solution(board))
        return (solutions)

    for c in range(len(board)):
        if board[row][c] == " ":
            tmp_board = chess_copy(board)
            tmp_board[row][c] = "Q"
            xout(tmp_board, row, c)
            solutions = recursive_solve(tmp_board, row + 1,
                                        queens + 1, solutions)

    return (solutions)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: nqueens N")
        sys.exit(1)
    if sys.argv[1].isdigit() is False:
        print("N must be a number")
        sys.exit(1)
    if int(sys.argv[1]) < 4:
        print("N must be at least 4")
        sys.exit(1)

    board = init_chess(int(sys.argv[1]))
    solutions = recursive_solve(board, 0, 0, [])
    for sol in solutions:
        print(sol)
