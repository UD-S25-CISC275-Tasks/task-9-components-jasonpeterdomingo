import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎄" | "🎆" | "❄️" | "🐰" | "🦃";
    const ALPHABETICAL: Record<Holiday, Holiday> = {
        "❄️": "🎄",
        "🎄": "🐰",
        "🐰": "🎆",
        "🎆": "🦃",
        "🦃": "❄️"
    };
    const YEAR: Record<Holiday, Holiday> = {
        "🎆": "❄️",
        "❄️": "🐰",
        "🐰": "🦃",
        "🦃": "🎄",
        "🎄": "🎆"
    };
    const [holiday, setHoliday] = useState<Holiday>("❄️");
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <div>
                <Button
                    onClick={() => {
                        setHoliday(ALPHABETICAL[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(YEAR[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
