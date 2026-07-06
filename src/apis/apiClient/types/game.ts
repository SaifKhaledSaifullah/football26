import { MatchType } from './matchType';

export interface Game {
  _id: string;
  id: string;
  home_team_id: string; // "0" when undecided (knockout)
  away_team_id: string;
  home_score: string;
  away_score: string;
  home_scorers: string; // postgres-array string or "null"
  away_scorers: string;
  group: string; // "A".."L" or "R32" / "R16" / "QF" / "SF" / "3RD" / "FINAL"
  matchday: string;
  local_date: string; // "MM/DD/YYYY HH:mm"
  persian_date: string;
  stadium_id: string;
  finished: 'TRUE' | 'FALSE';
  time_elapsed: string; // "notstarted" | "finished" | live minute
  type: MatchType;
  home_team_name_en?: string;
  home_team_name_fa?: string;
  away_team_name_en?: string;
  away_team_name_fa?: string;
  home_team_label?: string; // e.g. "Winner Match 86" when undecided
  away_team_label?: string;
}
