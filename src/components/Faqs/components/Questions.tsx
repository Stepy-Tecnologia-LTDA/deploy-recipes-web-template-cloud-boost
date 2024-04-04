"use client";

import { MinusIcon } from "@/components/Icons/MinusIcon";
import { MoreIcon } from "@/components/Icons/MoreIcon";
import { useState } from "react";

interface QuestionsProps {
  title: string;
  description: string;
}

export function Questions({ title, description }: QuestionsProps) {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col gap-2 items-start">
      <div className="w-full flex items-center justify-between">
        <h2 className="leading-5 text-neutral-950 font-medium">{title}</h2>

        {showQuestion ? (
          <button onClick={() => setShowQuestion(false)}>
            <MinusIcon />
          </button>
        ) : (
          <button onClick={() => setShowQuestion(true)}>
            <MoreIcon />
          </button>
        )}
      </div>

      {showQuestion && (
        <p className="text-sm text-neutral-800">{description}</p>
      )}
    </div>
  );
}
