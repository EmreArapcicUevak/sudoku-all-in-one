import {useState} from "react";

function RuleDropdown({appliedRules, addRule}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="text-white px-4 py-2 mb-2 transition"
            >Add Rule
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] rounded-2xl py-1 z-10">
                    {
                        appliedRules.map((rule) => {
                            if (!rule.added) {
                                return (<button onClick={(e) => {
                                    e.stopPropagation();
                                    addRule(rule.name);
                                    setOpen(false);
                                }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                                    {rule.name}
                                </button>)
                            }
                        })
                    }
                </div>
            )}
        </div>
    );
}

export default RuleDropdown;