from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from typing import Any

def white_dot_constraint_func(assignment : dict[str, Any]):
  values = list(assignment.values())
  return values[0] == values[1] + 1 or values[1] == values[0] + 1

def add_white_dot_constraint(csp : ConstraintSatisfactionProblem, variables : list[str]):
  assert len(set(variables)) == 2
  csp.add_constraint(Constraint(variables=variables, constraint_func=white_dot_constraint_func))

  return True

__all__ = ['add_white_dot_constraint']