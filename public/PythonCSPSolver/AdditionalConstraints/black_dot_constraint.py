from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from typing import Any

def black_dot_constraint_func(assignment : dict[str, Any]):
  values = list(assignment.values())
  return values[0] == values[1] * 2 or values[1] == values[0] * 2

def add_black_dot_constraint(csp : ConstraintSatisfactionProblem, variables : list[str]):
  assert len(set(variables)) == 2
  csp.add_constraint(Constraint(variables=variables, constraint_func=black_dot_constraint_func))

__all__ = ['add_black_dot_constraint']
