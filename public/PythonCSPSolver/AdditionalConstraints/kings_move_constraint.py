from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from aima_toolkit.ConstraintSatisfactionProblemPackage.PremadeConstraints import add_alldiff_constraint_as_binary_constraint
from typing import Any

def compute_affected_variables(var: str):
  row = int( var[ 1 ] )
  col = int( var[ 2 ] )

  moves = [
    (row, col),
    (row + 1, col),
    (row - 1, col),
    (row, col + 1),
    (row, col - 1),
    (row + 1, col + 1),
    (row + 1, col - 1),
    (row - 1, col + 1),
    (row - 1, col - 1),
  ]

  return { f"X{i}{j}" for i, j in moves if 1 <= i <= 9 and 1 <= j <= 9 }


def add_kings_move_constraint(csp: ConstraintSatisfactionProblem, variables: list[ str ]):
  for var in csp.variables:
    add_alldiff_constraint_as_binary_constraint( csp, compute_affected_variables( var ) )

  return True
__all__ = [ 'add_kings_move_constraint' ]