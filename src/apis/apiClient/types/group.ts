export interface Group {
  _id: string;
  name: string; // "A".."L"
  teams: GroupRow[];
}
export interface GroupRow {
  team_id: string;
  mp: string;
  w: string;
  l: string;
  d: string;
  pts: string;
  gf: string;
  ga: string;
  gd: string;
}
