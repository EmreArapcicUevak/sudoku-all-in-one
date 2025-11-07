import RuleItem from "./RuleItem.jsx";
import RuleDropdown from "./RuleDropdown.jsx";

function RuleContainer({solve, canRun, selectedRule, onRuleClicked, appliedRules, addRule, removeRule, setShowCellSelector}) {
    return(
        <div className="m-16 self-start">
            <div className="flex justify-center items-center">
                <span className="text-4xl font-bold">Rules</span>
                <button className="mb-2 ml-8 mr-8" onClick={(e) => {e.stopPropagation(); solve()}} disabled={!canRun}>Solve</button>
                <RuleDropdown appliedRules={appliedRules} addRule={addRule}/>
            </div>
            <div className="border-t-2 border-white"></div>
            <div>
                {
                    appliedRules.filter(rule => rule.added === true).map(rule => {
                        return(
                            <RuleItem key={rule.name} name={rule.name} isRemovable={rule.name !== appliedRules[0].name} selectedRule={selectedRule} onRuleClicked={onRuleClicked} onDeleteRule={removeRule} setShowCellSelector={setShowCellSelector}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default RuleContainer;