
interface PlayerProperty {
    pace: number;
    acceleration: number;
    sprint_speed: number;
  }
  
  interface ShotProperty {
    shooting: number;
    positioning: number;
    finishing: number;
    shot_power: number;
    long_shots: number;
    volleys: number;
    penalties: number;
  }
  
  interface PassProperty {
    passing: number;
    vision: number;
    crossing: number;
    fk_accuracy: number;
    short_passing: number;
    long_passing: number;
    curve: number;
  }
  
  interface DribbleProperty {
    dribbling: number;
    agility: number;
    balance: number;
    reactions: number;
    ball_control: number;
    dribblingp: number;
    composure: number;
  }
  
  interface DefendProperty {
    defending: number;
    interceptions: number;
    heading_accuracy: number;
    marking: number;
    standing_tackle: number;
    sliding_tackle: number;
  }
  
  interface PhysicalProperty {
    physicality: number;
    jumping: number;
    stamina: number;
    strength: number;
    aggression: number;
  }
  
  interface Position {
    position: string;
  }
  
  interface Height {
    height_cm: number;
  }
  
  interface Nation {
    nation: string;
  }
  
  interface Club {
    club: string;
  }
  
  interface Video {
    url: string;
    url1: string;
    url2: string;
    url3: string;
  }
  
  interface Team {
    team_name: string;
    year: string;
  }
  
  interface TeamsHistory {
    teams: Team[];
  }
  
  export interface dataInterface {
    name: string;
    properties: {
      overall: number;
      pac: PlayerProperty[];
      SHO: ShotProperty[];
      PAS: PassProperty[];
      DRI: DribbleProperty[];
      DEF: DefendProperty[];
      PHY: PhysicalProperty[];
      position: Position[];
      HEIGHT: Height[];
      NATION: Nation[];
      ACTUAL_CLUB: Club[];
    }[];
    videos: Video[];
    teams_history: TeamsHistory[];
  }