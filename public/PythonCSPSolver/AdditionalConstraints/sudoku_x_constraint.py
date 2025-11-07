from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from aima_toolkit.ConstraintSatisfactionProblemPackage.PremadeConstraints import add_alldiff_constraint_as_binary_constraint
from typing import Any

def add_sudoku_x_constraint(csp: ConstraintSatisfactionProblem, variables: list[ str ]):
  add_alldiff_constraint_as_binary_constraint(csp, { f'X{i}{i}' for i in range(1, 10) }) # Add main diagonal
  add_alldiff_constraint_as_binary_constraint(csp, { f'X{10-i}{i}' for i in range(1, 10) }) # Add secondary diagonal
  return True
__all__ = [ 'add_sudoku_x_constraint' ]