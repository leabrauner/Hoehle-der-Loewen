import Action from './core/action';

// View Actions
export const ChangeView = Action();

// User Actions
export const Login = Action();
export const Logout = Action();

// Voting Actions
export const Vote = Action();

// Admin Actions
export const CreateIdea = Action();
export const RemoveIdea = Action();
export const StartVoting = Action();
export const StopVoting = Action();
export const SetVotingDuration = Action();