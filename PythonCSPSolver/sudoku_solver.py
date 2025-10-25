from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from aima_toolkit.ConstraintSatisfactionProblemPackage.PremadeConstraints import add_alldiff_constraint_as_binary_constraint
from aima_toolkit.ConstraintSatisfactionProblemPackage.ConstraintPropagation import ac3
from aima_toolkit.ConstraintSatisfactionProblemPackage.Search import backtracking_search
from PythonCSPSolver.AdditionalConstraints import *

constraint_adding_functions = {
  'white dot' : add_white_dot_constraint,
  'black dot' : add_black_dot_constraint,
  'kings move' : add_kings_move_constraint,
  'knights move' : add_knights_move_constraint,
  'sudoku x' : add_sudoku_x_constraint,
  'thermo' : add_thermo_constraint,
  'german whisper' : add_german_whisper_constraint,
  'arrow' : add_arrow_constraint
}

def solve(grid : list[list[int]], additional_constraints : list[tuple[str, tuple[str, ...]]] = []) -> list[list[int]] | bool:
  assert len(grid) == 9

  variables = [f"X{i}{j}" for i in range(1, 10) for j in range(1, 10)]
  sudoku_domain = set( range( 1, 10 ) )

  sudoku_csp : ConstraintSatisfactionProblem = ConstraintSatisfactionProblem(variables, domains = dict( [ ( variable , sudoku_domain) for variable in variables ] ) )
  for row in range( 9 ):
    assert len(grid[row]) == 9
    assert set(grid[row]).issubset(sudoku_domain.union( {0} ))

    for col in range( 9 ):
      if grid[row][col] != 0:
        variable = f"X{row+1}{col+1}"
        sudoku_csp.domains[variable] = { grid[row][col] }

  # Add alldiff constraint to all blocks
  for row_block in range( 3 ):  # 0,1,2 -> row bands
    for col_block in range( 3 ):  # 0,1,2 -> column bands
      block_vars = {
        f"X{r}{c}"
        for r in range( row_block * 3 + 1, row_block * 3 + 4 )
        for c in range( col_block * 3 + 1, col_block * 3 + 4 )
      }
      add_alldiff_constraint_as_binary_constraint( sudoku_csp, block_vars )

  # add alldiff constraint to all vertical and horizontal lines
  for i in range( 1, 10 ):
    add_alldiff_constraint_as_binary_constraint( sudoku_csp, { f"X{i}{col}" for col in range( 1, 10 ) } )  # Add all vertical constraints
    add_alldiff_constraint_as_binary_constraint( sudoku_csp, { f"X{row}{i}" for row in range( 1, 10 ) } )  # Add all horizontal constraints




  # Add aditional constraints
  for constraint_name, variables in additional_constraints:
    constraint_name = constraint_name.lower()
    assert constraint_name in constraint_adding_functions.keys()

    constraint_adding_functions[constraint_name](sudoku_csp, variables)

  # try to cut down the domain at start, if found not possible return False to mark there is no solution
  if not ac3( sudoku_csp ): return False

  assignment = backtracking_search(sudoku_csp)
  if assignment == False: return False

  for row in range( 9 ):
    for col in range( 9 ):
      variable = f"X{row+1}{col+1}"
      grid[row][col] = assignment[variable]

  return grid

solution = solve(
  [
    [6,0,0,3,8,0,0,0,2],
    [0,0,3,0,0,0,0,4,9],
    [8,0,2,0,5,0,0,0,0],
    [0,0,6,0,4,5,0,0,3],
    [1,0,0,0,7,0,0,0,4],
    [0,4,0,2,9,0,0,0,5],
    [0,0,5,8,0,0,9,6,1],
    [0,0,0,0,3,0,0,0,0],
    [0,0,9,0,0,7,3,0,0],
  ], [

  ]
)

if solution != False:
  for row in solution:
    print(row)
else:
  print("No solution")