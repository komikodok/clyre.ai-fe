"use client";

import { SwitchTopicMessage } from "./switch-topic-message";
import { FollowupSuggestionMessage } from "./followup-suggestion-message";
import { UXAction } from "../ai-message";

export default function ToolMessage({ action }: { action: UXAction }) {
  if (!action || Object.keys(action).length === 0) return null;

  switch (action.type) {
    case "SWITCH_TOPIC":
      return (
        <SwitchTopicMessage
          message={action.message}
          targetTopic={action.target_topic}
        />
      );

    case "FOLLOWUP_SUGGESTION":
      return <FollowupSuggestionMessage suggestions={action.suggestions} />;

    default:
      return null;
  }
}

export { SwitchTopicMessage } from "./switch-topic-message";
export { FollowupSuggestionMessage } from "./followup-suggestion-message";
