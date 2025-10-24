from aima_toolkit.ConstraintSatisfactionProblemPackage import ConstraintSatisfactionProblem, Constraint
from typing import Any


def german_whisper_constraint_func(assignment: dict[ str, Any ]):
  values = list(assignment.values())
  assert len(values) == 2

  return abs(values[0] - values[1]) >= 5

def add_german_whisper_constraint(csp : ConstraintSatisfactionProblem, variables : list[str]):
  for i in range(len(variables) - 1):
    arc = (variables[i], variables[i + 1])
    csp.add_constraint(
      Constraint(
        list(arc),
        german_whisper_constraint_func
        )
    )

__all__ = ['add_german_whisper_constraint']